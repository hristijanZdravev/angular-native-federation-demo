import { Component } from '@angular/core';

@Component({
  selector: 'mfe1-info',
  standalone: true,
  template: `
    <div class="mfe1-panel">
      <div class="mfe1-panel-header">
        <span class="mfe1-tag">Overview</span>
        <h2>Angular remote is connected and presentation-ready.</h2>
      </div>

      <p class="mfe1-lead">
        This view shows how the remote can carry its own layout polish while
        still feeling consistent inside the host shell.
      </p>

      <div class="mfe1-feature-grid">
        <article class="mfe1-feature-card">
          <strong>Shared visual language</strong>
          <p>Rounded surfaces, soft gradients, and better hierarchy across each app.</p>
        </article>
        <article class="mfe1-feature-card">
          <strong>Standalone Angular routes</strong>
          <p>Nested content renders cleanly without relying on generic Bootstrap defaults.</p>
        </article>
        <article class="mfe1-feature-card">
          <strong>Demo-friendly storytelling</strong>
          <p>Each section now communicates what the remote is doing at a glance.</p>
        </article>
      </div>
    </div>
  `,
})
export class InfoComponent {}
