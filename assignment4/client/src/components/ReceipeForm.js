import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addReceipeAsync } from "../redux/users/thunks";

function ReceipeForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [ingred, setIngredients] = useState("");
  const [instr, setInstructions] = useState("");
  const [comple_time, setCompletionTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addReceipeAsync({
        name: name,
        ingredients: ingred,
        instructions: instr,
        completion_time: comple_time
      })
    );
    handleClearForm();
  };

  const handleClearForm = () => {
    setName('');
    setIngredients('');
    setInstructions('');
    setCompletionTime('');
  };

  return (
    <div id="receipe_form">
      <form id="form">
        <label>Name:</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <br />
        <label>Ingredients:</label>
        <br />
        <input
          id="ingredients"
          name="ingred"
          type="text"
          onChange={(event) => setIngredients(event.target.value)}
          value={ingred}
        />
        <br />
        <label>Instructions:</label>
        <br />
        <input
          id="instructions"
          name="instr"
          type="text"
          onChange={(event) => setInstructions(event.target.value)}
          value={instr}
        />
         <br />
        <label>Completion time:</label>
        <br />
        <input
          id="completion_time"
          name="comple_time"
          type="text"
          onChange={(event) => setCompletionTime(event.target.value)}
          value={comple_time}
        />
      </form>
      
      <br />
      <button
          id="addFormBtn"
          className="button_stuff"
          onClick={handleSubmit}
        >
          Add
        </button>
        <button
          id="clearFormBtn"
          className="button_stuff"
          onClick={handleClearForm}
        >
          Clear
        </button>
    </div>
  );
}

export default ReceipeForm;