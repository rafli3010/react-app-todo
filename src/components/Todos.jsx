import TodoItem from "./TodoItem";

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
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
    width: "100%",
    padding: "20px 0",
  },
};

export default Todos;
