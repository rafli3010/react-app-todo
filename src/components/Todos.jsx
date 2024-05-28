import TodoItem from "./TodoItem";

const Todos = ({ todos }) => {
  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Todos;
