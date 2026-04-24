import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { CustomManifest } from './utils/remote-config';
import { buildRoutes } from './utils/build-routes';
import { ManifestService } from './service/manifest.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  remotes: any[] = [];

  constructor(
    private router: Router,
    private manifestService: ManifestService
  ) {}

  ngOnInit() {
    const manifest = this.manifestService.getManifest();

    if (!manifest || Object.keys(manifest).length === 0) {
      console.error('Manifest is empty!');
      return;
    }

    const dynamicRoutes = buildRoutes(manifest);

    this.router.resetConfig([
      ...this.router.config,
      ...dynamicRoutes
    ]);

    this.remotes = Object.values(manifest);
  }

  isActive(routePath: string): boolean {
    return this.router.url.startsWith(`/${routePath}`);
  }

  navigateTo(routePath?: string): void {
    this.router.navigate(routePath ? [routePath] : ['/']);
  }
}
