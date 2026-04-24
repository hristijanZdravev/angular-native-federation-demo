import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

class Mfe2Element extends HTMLElement {
  root = null;

  connectedCallback() {
    if (this.root) {
      return;
    }

    const mountPoint = document.createElement('div');
    this.appendChild(mountPoint);

    this.root = ReactDOM.createRoot(mountPoint);
    this.root.render(<App />);
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
    this.replaceChildren();
  }
}

customElements.define('mfe2-app', Mfe2Element);
