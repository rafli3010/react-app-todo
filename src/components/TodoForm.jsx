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
    marginBottom: "32px",
    textAlign: "center",
  },
  formInput: {
    height: "40px",
    width: "70%",
    fontSize: "16px",
    padding: "0 16px",
  },
  button: {
    height: "46px",
    fontSize: "16px",
    marginLeft: "10px",
  },
};

export default TodoForm;
