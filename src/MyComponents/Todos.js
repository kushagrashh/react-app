import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px 40px" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px"
      }}>
        <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "700", color: "#111827" }}>
          📋 Your Todos
        </h3>
        {props.todos.length > 0 && (
          <span style={{
            background: "#eff6ff",
            color: "#2563eb",
            border: "1px solid #bfdbfe",
            borderRadius: "20px",
            padding: "3px 12px",
            fontSize: "13px",
            fontWeight: "600"
          }}>
            {props.todos.length} {props.todos.length === 1 ? "task" : "tasks"}
          </span>
        )}
      </div>

      {props.todos.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "60px 20px",
          background: "#f9fafb",
          borderRadius: "16px",
          border: "1.5px dashed #e5e7eb"
        }}>
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>🎉</div>
          <p style={{ margin: 0, color: "#6b7280", fontSize: "15px" }}>No todos yet. Add one above!</p>
        </div>
      ) : (
        props.todos.map((todo) => {
          console.log(todo.sno);
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          )
        })
      )}
    </div>
  )
}

export default Todos