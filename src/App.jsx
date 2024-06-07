import { useState } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: true,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundImage: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "2rem",
    margin: "20px 0",
  },
};

export default App;
