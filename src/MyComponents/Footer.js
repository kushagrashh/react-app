import React from 'react'

export const Footer = () => {
  return (
    <footer style={{
      background: "#111827",
      color: "#9ca3af",
      padding: "20px 24px",
      textAlign: "center",
      marginTop: "auto",
      borderTop: "1px solid #1f2937"
    }}>
     <p style={{ margin: 0, fontSize: "13px" }}>
  © {new Date().getFullYear()} <span style={{ color: "#fff", fontWeight: "500" }}>MyTodosList</span> — Built by <span style={{ color: "#60a5fa", fontWeight: "500" }}>Kushagra Sharma</span>
</p>
    </footer>
  )
}
