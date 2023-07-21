import { useState } from "react";
import TodoList from "./todoList";
import AddButton from "./addButton";
import DeleteAllButton from "./deleteallButton";
import Question from "./deleteQuestion";

let xButton = false;
let clickedone = "";
let newitem = [];

function TodoApp() {
  function clearfield() {
  
    newcurent("");
    xButton=false;
  }
  const [xbuttonState,] = useState(
    <button type="button" onClick={clearfield}>
      {" "}
      <b>X</b>{" "}
    </button>
  );
  const [current, newcurent] = useState("Type activities");
  function update(event) {
    newcurent(event.target.value);
    event.target.value < 1 ? xButton = false : xButton = true;
  }

  function updateArray(event) {
    newitem.push(event.target.value);
  }

  const [listItem, newlistItem] = useState("Empty");
  function addItem() {
    newlistItem(
      newitem.map((items) => {
        return (
          <div>
            <b>
              <li>{items}</li>
            </b>
            <button className="btns1">Delete</button>
          </div>
        );
      })
    );
    console.log(listItem);
  }
  function removeAll(iv) {
    clickedone = <Question onyes={yesclicked} onNo={noclicked} />;
    newlistItem(
      newitem.map((items) => {
        return (
          <div>
            <b>
              <li>{items}</li>
            </b>
            <button className="btns1">Delete</button>
          </div>
        );
      })
    );
    //newQuestion("");

   
    
  }
  function yesclicked() {
    for (let i of newitem) {
      newitem.pop(i);
    }
    newitem.shift();
    console.log("remove clicked");
    newlistItem("Empty");
    clickedone = null;
  }
  function noclicked() {
    clickedone = null;
    newlistItem(listItem);
  }

  return (
    <div>
      <div>
        <div className="app">
          <h1 className="title">TODO APP</h1>
          <h4>{current}</h4>
          <form>
            <div className="input_and_clear">
              <input
                type="text"
                value={current}
                className="pp"
                onChange={update}
                onBlur={updateArray}
              />
              <div>{xButton && xbuttonState}</div>
            </div>

            <div className="btnsContainer">
              <DeleteAllButton delclick={removeAll} />
              <AddButton click={addItem} />
            </div>
          </form>
        </div>
        {<TodoList todo={listItem} />}
      </div>
      {clickedone}
    </div>
  );
}
export { TodoApp };
