import "./App.css";
import todo_image from "./todo_image.png";
import { TodoApp } from "./todo_app";
import { About } from "./about";

function App() {
  return (
    <div>
      <About />
      <div>
        <div className="container">
          <img src={todo_image} alt="todoimage" />
          <TodoApp />
        </div>
      </div>
    </div>
  );
}

export default App;
