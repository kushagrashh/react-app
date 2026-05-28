import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div style={{
      background: "#ffffff",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      padding: "16px 20px",
      marginBottom: "12px",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "16px",
      transition: "box-shadow 0.2s",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
    }}
      onMouseOver={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"}
      onMouseOut={e => e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flex: 1 }}>
        <span style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: "#eff6ff",
          border: "1.5px solid #bfdbfe",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          color: "#2563eb",
          fontWeight: "700",
          flexShrink: 0,
          marginTop: "2px"
        }}>{todo.sno + 1}</span>
        <div>
          <h4 style={{ margin: "0 0 4px", fontSize: "15px", fontWeight: "600", color: "#111827" }}>
            {todo.title}
          </h4>
          <p style={{ margin: 0, fontSize: "13px", color: "#6b7280", lineHeight: "1.5" }}>
            {todo.desc}
          </p>
        </div>
      </div>
      <button
        onClick={() => onDelete(todo)}
        style={{
          background: "#fff1f2",
          color: "#e11d48",
          border: "1px solid #fecdd3",
          padding: "6px 12px",
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: "600",
          cursor: "pointer",
          flexShrink: 0,
          transition: "background 0.2s"
        }}
        onMouseOver={e => e.currentTarget.style.background = "#ffe4e6"}
        onMouseOut={e => e.currentTarget.style.background = "#fff1f2"}
      >
        Delete
      </button>
    </div>
  )
}