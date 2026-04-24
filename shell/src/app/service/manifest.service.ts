import { Injectable } from '@angular/core';
import { CustomManifest } from '../utils/remote-config';

@Injectable({ providedIn: 'root' })
export class ManifestService {
  private manifest!: CustomManifest;

  async load(): Promise<void> {
    // Load the extended manifest for routes & menu
    const res = await fetch('/assets/remote-config.json');
    this.manifest = await res.json();
  }

  getManifest(): CustomManifest {
    if (!this.manifest) {
      throw new Error('Manifest not loaded yet');
    }
    return this.manifest;
  }
}