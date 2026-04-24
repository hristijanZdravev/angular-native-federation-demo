import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { ManifestService } from './app/service/manifest.service';
import { buildRoutes } from './app/utils/build-routes';
import manifest from './assets/remote-config.json';

export function loadManifestFactory(manifestService: ManifestService) {
  return () => manifestService.load();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    {
      provide: APP_INITIALIZER,
      useFactory: loadManifestFactory,
      deps: [ManifestService],
      multi: true,
    },
    [provideRouter(buildRoutes(manifest))],
  ],
});