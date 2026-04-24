import { loadRemoteModule } from '@angular-architects/native-federation';
import { AfterViewInit, Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { EXPOSED_MODULE, REMOTE_ENTRY, REMOTE_NAME } from '../build-routes';

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  template: `<div #reactContainer></div>`
})
export class ReactWrapper implements AfterViewInit {
  @ViewChild('reactContainer', { static: true }) reactContainer!: ElementRef;

  private remoteEntry = inject(REMOTE_ENTRY);
  private remoteName = inject(REMOTE_NAME);
  private exposedModule = inject(EXPOSED_MODULE);

  async ngAfterViewInit() {
    if (!this.remoteEntry || !this.remoteName || !this.exposedModule) {
      console.error('Remote config missing', this.remoteEntry, this.remoteName, this.exposedModule);
      return;
    }

    await loadRemoteModule({
      remoteEntry: this.remoteEntry,
      remoteName: this.remoteName,
      exposedModule: this.exposedModule
    });

    const el = document.createElement('mfe2-app'); // React custom element
    this.reactContainer.nativeElement.appendChild(el);
  }
}