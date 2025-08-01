import React from 'react';
import './App.css';
import './design-tokens.css';

/**
 * PUBLIC_INTERFACE
 * The main App component, now renders the dashboard UI as per the Figma-based design.
 * This structure is directly based on /assets/dashboard.html, adapted to React and using the utility CSS.
 * Static, initial version for previewing the main dashboard.
 */
function App() {
  return (
    <div className="dashboard-root">
      <aside className="sidebar flex flex-col">
        <div className="logo typo-header-lg text-purple">Pro Manage</div>
        <nav className="nav-section flex flex-col gap-md">
          <a href="#" className="nav-link active"><span className="typo-label">Dashboard</span></a>
          <a href="#" className="nav-link"><span className="typo-label-grey">Analytics</span></a>
          <a href="#" className="nav-link"><span className="typo-label-grey">Settings</span></a>
        </nav>
        <div className="flex flex-col" style={{ marginTop: "auto", marginBottom: 32 }}>
          <a href="#" className="nav-link"><span className="typo-label">Log out</span></a>
        </div>
      </aside>
      <main className="main-content" style={{ minHeight: "100vh" }}>
        <header className="topbar">
          <div className="typo-title-lg">Board</div>
          <div className="search typo-label-grey">Search</div>
        </header>
        <section className="kanban-board">
          <div className="kanban-column">
            <span className="typo-heading mb-sm kanban-status">To do</span>
            <div className="kanban-card">
              <div className="typo-body">Create design system for dashboard</div>
              <div className="mt-sm typo-label-grey">Due: 10 Aug</div>
            </div>
            <div className="kanban-card">
              <div className="typo-body">Style Kanban cards</div>
              <div className="mt-sm typo-label-grey">Due: 12 Aug</div>
            </div>
          </div>
          <div className="kanban-column">
            <span className="typo-heading mb-sm kanban-status">In Progress</span>
            <div className="kanban-card">
              <div className="typo-body">Refine sidebar navigation</div>
              <div className="mt-sm typo-label-grey">Due: 09 Aug</div>
            </div>
            <div className="kanban-card">
              <div className="typo-body">Add drag-and-drop</div>
              <div className="mt-sm typo-label-grey">Due: 13 Aug</div>
            </div>
          </div>
          <div className="kanban-column">
            <span className="typo-heading mb-sm kanban-status">Done</span>
            <div className="kanban-card">
              <div className="typo-body">Figma import complete</div>
              <div className="mt-sm typo-label-grey">Done: 07 Aug</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
