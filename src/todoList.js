
function TodoList(props) {
  return (
    <div className="todoContainer">
      <h1>TO-DO LIST</h1>
      <ol> {props.todo}</ol>
    </div>
  );
}
export default TodoList;
