import { initFederation } from '@angular-architects/native-federation';

Promise.all([
  initFederation('/assets/federation.manifest.json'),
  fetch('/assets/remote-config.json')
])
  .then(async ([_, res]) => {
    (window as any).__manifest = await res.json();
  })
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));