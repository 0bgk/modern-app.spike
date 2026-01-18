import React from 'react';
import './root.component.css';

export default function Root(props) {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const daysInMonth = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30, 31
  ];

  return (
    <div id="app">
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>Calendar Menu</h2>
          </div>
          <nav className="sidebar-nav">
            <a href="#" className="nav-item active">
              <span className="icon">📅</span>
              <span>Appointments</span>
            </a>

            <a href="#" className="nav-item">
              <span className="icon">⚙️</span>
              <span>Settings</span>
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="main-content">
          <div className="content-wrapper">
            <h1>Appointments</h1>

            <section className="content-section">
              <h2>January 2026</h2>
              <div className="calendar">
                <div className="calendar-header">
                  {daysOfWeek.map(day => (
                    <div key={day} className="calendar-day-name">{day}</div>
                  ))}
                </div>
                <div className="calendar-grid">
                  {daysInMonth.map(day => (
                    <div key={day} className="calendar-day">
                      <span className="day-number">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
