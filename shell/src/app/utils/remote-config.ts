export interface CustomRemoteConfig {
  remoteEntry: string;
  exposedModule: string;
  displayName: string;
  remoteName: string;
  routePath: string;
  isAngular?: boolean;
}

export type CustomManifest = Record<string, CustomRemoteConfig>;