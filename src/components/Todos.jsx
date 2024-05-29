import TodoItem from "./TodoItem";

// Menerima function toggleCompleted sebagai sebuah prop
const Todos = ({ todos, toggleCompleted }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          // Teruskan function toggleCompleted ke component TodoItem
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default Todos;
