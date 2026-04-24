import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { CustomManifest, CustomRemoteConfig } from './remote-config';
import { ReactWrapper } from './react-wrapper/react-wrapper';
import { InjectionToken } from '@angular/core';

export const REMOTE_ENTRY = new InjectionToken<string>('REMOTE_ENTRY');
export const REMOTE_NAME = new InjectionToken<string>('REMOTE_NAME');
export const EXPOSED_MODULE = new InjectionToken<string>('EXPOSED_MODULE');

export function buildRoutes(manifest: CustomManifest): Routes {
  return Object.entries(manifest).map(([key, remote]: [string, CustomRemoteConfig]) => {
    const path = remote.routePath || remote.remoteName;

    if (remote.isAngular) {
      return {
        path,
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: remote.remoteEntry,
            remoteName: key,
            exposedModule: remote.exposedModule
          }).then(m => m.APP_ROUTES),
      };
    } else {
      return {
        path,
        loadComponent: () => ReactWrapper,
        providers: [
        { provide: REMOTE_ENTRY, useValue: remote.remoteEntry },
        { provide: REMOTE_NAME, useValue: key },
        { provide: EXPOSED_MODULE, useValue: remote.exposedModule }
      ]
      };
    }
  });
}