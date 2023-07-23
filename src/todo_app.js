import { useRef, useState } from "react";
import TodoList from "./todoList";
import AddButton from "./addButton";
import DeleteAllButton from "./deleteallButton";
import Question from "./deleteQuestion";

let xButton = false;
let clickedone = "";
let newitem = [];
let count=0
let countHolder=[]

function TodoApp() {
  function clearfield() {
    newcurent("Type activities");
    xButton = false;
  }
  const [xbuttonState] = useState(
    <button type="button" onClick={clearfield}>
      <b>X</b>
    </button>
  );
  
  const [current, newcurent] = useState("Type activities");
  function update(event) {
    newcurent(event.target.value);
    event.target.value < 1 ? (xButton = false) : (xButton = true);
  }

  function deleteTodo() {
    for (let i=0; i<=newitem.length;i++){
      if (countHolder[i]){

      }
    }
  }
  
  const [listItem, newlistItem] = useState("Empty!");
  const inputRef= useRef("empty")
  function addItem() {
    count++
    countHolder.push(count)
    newitem.push(inputRef.current.value);
    newlistItem(
      newitem.map((items, index) => {
        return (
          <div>
            <b>
              <li>
                {items} <button onClick={deleteTodo}>Delete</button>
                <input type="checkbox"></input>
              </li>
            </b>
          </div>
          
        );
      })
    );
    console.log(listItem);
    console.log(newitem)
  }
  function removeAll(iv) {
    clickedone = <Question onyes={yesclicked} onNo={noclicked} />;
    newlistItem("");
    //newQuestion("");
  }
  function yesclicked() {
    for (let i of newitem) {
      newitem.pop(i);
    }
    newitem.shift();
    newitem.pop()
    newlistItem("Empty!");
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
          <h1 className="title">TO-DO APP</h1>
          <h4>{current}</h4>
          <form>
            <div className="input_and_clear">
              <input
                type="text"
                value={current}
                className="pp"
                onChange={update}
                ref={inputRef}
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
