import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();

  const navLinkStyle = (path) => ({
    padding: "6px 14px",
    borderRadius: "20px",
    fontWeight: "500",
    fontSize: "14px",
    textDecoration: "none",
    transition: "background 0.2s, color 0.2s",
    background: location.pathname === path ? "#2563eb" : "transparent",
    color: location.pathname === path ? "#fff" : "#374151",
  });

  return (
    <nav style={{
      background: "#ffffff",
      borderBottom: "1px solid #e5e7eb",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "60px",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
    }}>
      <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{
          background: "#2563eb",
          color: "#fff",
          width: "30px",
          height: "30px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          fontWeight: "700"
        }}>✓</span>
        <span style={{ fontWeight: "700", fontSize: "18px", color: "#111827", letterSpacing: "-0.3px" }}>
          {props.title}
        </span>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <Link to="/" style={navLinkStyle("/")}>Home</Link>
        <Link to="/about" style={navLinkStyle("/about")}>About</Link>
      </div>

      {props.searchBar && (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ position: "relative" }}>
            <input
              type="search"
              placeholder="Search todos..."
              style={{
                padding: "7px 14px 7px 36px",
                border: "1px solid #e5e7eb",
                borderRadius: "20px",
                fontSize: "14px",
                outline: "none",
                width: "200px",
                background: "#f9fafb",
                color: "#111827"
              }}
            />
            <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af", fontSize: "14px" }}>🔍</span>
          </div>
        </div>
      )}
    </nav>
  )
}

Header.defaultProps = {
  title: "My Todos",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}