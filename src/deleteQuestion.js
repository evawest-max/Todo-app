function Question(props) {
  return (
    <div className="questionContainer">
      <h1> <b>Are you sure?</b></h1>
      <div className="btnsContainer">
        <button className="btns2"  onClick={props.onyes}>
          Yes
        </button>
        <button className="btns1" onClick={props.onNo}>
          No
        </button>
      </div>
    </div>
  );
}

export default Question
