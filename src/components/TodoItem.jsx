import React from "react";

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const getTodoTitleStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      color: todo.completed ? "#888" : "#000",
      transition: "all 0.3s",
    };
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
};

const styles = {
  todoItem: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    border: "2px solid #f4f4f4",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  checkbox: {
    height: "18px",
    width: "18px",
  },
  button: {
    backgroundColor: "#bb0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    transition: "background-color 0.3s",
  },
};

export default TodoItem;
