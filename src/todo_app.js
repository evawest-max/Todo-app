import { useState } from "react";
let newitem = [];

let it = [];

function TodoApp() {
  let put = (
    <button type="button" onClick={clearfield}>
      <b>X</b>
    </button>
  );
  const [current, newcurent] = useState("Type activities");

  const [clear, newclear] = useState("");
  function clearfield() {
    newcurent("");
    newclear("");
  }

  function update(event) {
    newcurent(event.target.value);
    newclear(put);
  }

  function updateArray(event) {
    newitem.push(event.target.value);
  }

  function yesDelete() {}
  function noDelete() {}

  const [question, newQuestion] = useState("");
  const tryit = () => {
    it.pop();
    it.push(
      <div>
        <h2> Are you sure</h2>
        <div className="btnsContainer">
          <button className="btns2" onClick={yesDelete}>
            Yes
          </button>
          <button className="btns1" onclick={noDelete}>
            no
          </button>
        </div>
      </div>
    );
    newQuestion(it[0]);
  };
  const [listItem, newlistItem] = useState("Empty");
  function addItem() {
    newlistItem(
      newitem.map((items) => {
        return (
          <div>
            <b>
              <li>{items}</li>
            </b>
            <button onClick={tryit} className="btns1">
              Delete
            </button>
          </div>
        );
      })
    );
  }

  function removeitem(iv) {
    newlistItem("Empty");
    newQuestion("");
    newcurent("");
    for (let i of it) {
      it.pop(i);
    }
  }

  return (
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
            <div>{clear}</div>
          </div>

          <div className="btnsContainer">
            <button type="button" className="btns1" onClick={removeitem}>
              Delete all
            </button>
            <button type="button" className="btns2" onClick={addItem}>
              Add
            </button>
          </div>
        </form>
      </div>

      <div className="todoContainer">
        <h1>TODO LIST</h1>
        <ol>{listItem}</ol>
      </div>
      {question}
    </div>
  );
}
export { TodoApp };
