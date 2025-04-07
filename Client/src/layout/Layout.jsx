// components/Layout.jsx
import React from "react";
import "./Layout.css";

const Layout = ({ sidebarOptions = [], children }) => {
  return (
    <div className="layout">
      <header className="header">
        <div className="company-name">Awesome Company</div>
        <div className="user-info">
          <img src="/profile-icon.png" alt="Profile" className="profile-pic" />
          <span className="username">John Doe</span>
        </div>
      </header>

      <div className="main">
        <aside className="sidebar">
          {sidebarOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className="sidebar-button"
            >
              {option.label}
            </button>
          ))}
        </aside>

        <section className="content">
          {children}
        </section>
      </div>
    </div>
  );
};

export default Layout;
