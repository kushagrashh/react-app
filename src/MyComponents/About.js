import React from 'react'

export const About = () => {
  return (
    <div style={{ maxWidth: "640px", margin: "60px auto", padding: "0 24px" }}>
      <div style={{
        background: "#eff6ff",
        border: "1px solid #bfdbfe",
        borderRadius: "16px",
        padding: "40px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{
            background: "#2563eb",
            color: "#fff",
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px"
          }}>ℹ️</span>
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#1e40af" }}>About</h2>
        </div>
        <p style={{ margin: "0 0 16px", color: "#1e3a5f", lineHeight: "1.7", fontSize: "15px" }}>
          This is a simple and effective Todo List application built with React. Manage your daily tasks with ease — add, track, and delete todos on the go.
        </p>
        <p style={{ margin: 0, color: "#3b82f6", lineHeight: "1.7", fontSize: "14px" }}>
          Your todos are saved automatically in your browser's local storage, so they persist even after you close the tab.
        </p>
      </div>
    </div>
  )
}