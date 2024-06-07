import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" style={styles.button}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "40px",
    marginBottom: "32px",
    textAlign: "center",
  },
  formInput: {
    height: "40px",
    width: "70%",
    fontSize: "16px",
    padding: "0 16px",
    border: "2px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    height: "46px",
    fontSize: "16px",
    marginLeft: "10px",
    padding: "0 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default TodoForm;
