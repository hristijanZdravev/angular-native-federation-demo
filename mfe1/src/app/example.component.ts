import { Component } from '@angular/core';

@Component({
  selector: 'mfe1-example',
  standalone: true,
  template: `
    <div class="mfe1-panel mfe1-panel-accent">
      <div class="mfe1-panel-header">
        <span class="mfe1-tag">Snapshot</span>
        <h2>Example route with a more polished state card.</h2>
      </div>

      <div class="mfe1-example-grid">
        <article>
          <span class="example-label">Latency</span>
          <strong>42 ms</strong>
        </article>
        <article>
          <span class="example-label">Availability</span>
          <strong>99.98%</strong>
        </article>
        <article>
          <span class="example-label">Theme</span>
          <strong>Ocean Glass</strong>
        </article>
      </div>
    </div>
  `,
})
export class ExampleComponent {}
