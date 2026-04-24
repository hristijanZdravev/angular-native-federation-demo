import React, { useState } from "react";
import "./App.css";

type ViewId = "overview" | "modules" | "activity";

function OverviewView() {
  return (
    <div className="react-panel">
      <div className="mt-2 react-panel-header">
        <h2>React remote now behaves like a product area, not a placeholder.</h2>
      </div>

      <p className="react-lead">
        The remote keeps the same visual language as the Angular app while still
        showing a distinct React implementation mounted through a custom element.
      </p>

      <div className="react-feature-grid">
        <article className="react-feature-card">
          <strong>Shared visual system</strong>
          <p>Matching panels, rounded metrics, and softer teal surfaces for a unified demo.</p>
        </article>
        <article className="react-feature-card">
          <strong>Internal route state</strong>
          <p>Lightweight view switching gives the React remote a clearer story during walkthroughs.</p>
        </article>
        <article className="react-feature-card">
          <strong>Host-friendly embedding</strong>
          <p>The app stays contained inside the shell instead of feeling like a separate page.</p>
        </article>
      </div>
    </div>
  );
}

function ModulesView() {
  return (
    <div className="react-panel react-panel-accent">
      <div className="mt-2 react-panel-header">
        <h2>Federated pieces active in the current session.</h2>
      </div>

      <div className="react-module-grid">
        <article>
          <span className="react-label">Host shell</span>
          <strong>Navigation + framing</strong>
        </article>
        <article>
          <span className="react-label">Angular MFE</span>
          <strong>Dashboard routes</strong>
        </article>
        <article>
          <span className="react-label">React MFE</span>
          <strong>Custom element surface</strong>
        </article>
      </div>
    </div>
  );
}

function ActivityView() {
  return (
    <div className="react-panel">
      <div className="mt-2 react-panel-header">
        <h2>Demo snapshot for narration during the handoff.</h2>
      </div>

      <div className="react-timeline">
        <article className="react-timeline-item">
          <span className="react-label">09:41</span>
          <strong>Remote loaded</strong>
          <p>Web component mounted into the shell route successfully.</p>
        </article>
        <article className="react-timeline-item">
          <span className="react-label">09:42</span>
          <strong>Theme applied</strong>
          <p>React view aligned visually with the Angular dashboard style.</p>
        </article>
        <article className="react-timeline-item">
          <span className="react-label">09:43</span>
          <strong>Views enabled</strong>
          <p>Internal route switching is available without leaving the host page.</p>
        </article>
      </div>
    </div>
  );
}

export default function App() {
  const [activeView, setActiveView] = useState<ViewId>("overview");

  const views: Record<ViewId, React.ReactNode> = {
    overview: <OverviewView />,
    modules: <ModulesView />,
    activity: <ActivityView />,
  };

  return (
    <section className="react-shell">
      <div className="react-hero">
        <div>
          <span className="react-eyebrow">React Remote</span>
          <h1>Operations dashboard for the federation demo.</h1>
          <p>
            This remote now mirrors the Angular experience more closely, with a
            cleaner dashboard layout, guided view switching, and shared styling.
          </p>
        </div>

        <div className="react-metrics">
          <article className="react-metric-card">
            <span>Runtime: </span>
            <strong>React 19</strong>
          </article>
          <article className="react-metric-card">
            <span>Surface: </span>
            <strong>Custom Element</strong>
          </article>
          <article className="react-metric-card">
            <span>Mode: </span>
            <strong>Demo Polished</strong>
          </article>
        </div>
      </div>

      <div className="mt-3 react-actions btn-group" role="tablist" aria-label="React remote views">
        <button
          className={`btn react-action ${activeView === "overview" ? "btn-success react-action-active" : "btn-outline-success"}`}
          type="button"
          onClick={() => setActiveView("overview")}
        >
          Overview
        </button>
        <button
          className={`btn react-action ${activeView === "modules" ? "btn-success react-action-active" : "btn-outline-success"}`}
          type="button"
          onClick={() => setActiveView("modules")}
        >
          Modules
        </button>
        <button
          className={`btn react-action ${activeView === "activity" ? "btn-success react-action-active" : "btn-outline-success"}`}
          type="button"
          onClick={() => setActiveView("activity")}
        >
          Activity
        </button>
      </div>

      <section className="react-content">{views[activeView]}</section>
    </section>
  );
}
