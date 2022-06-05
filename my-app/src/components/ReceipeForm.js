import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addReceipe, clearReceipes } from "../actions";

function ReceipeForm(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [ingred, setIngredients] = useState("");
  const [instr, setInstructions] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addReceipe({
        name: name,
        ingredients: ingred,
        instructions: instr
      })
    );
    handleClearForm();
  };

  const handleDeleteAll = (event) => {
    event.preventDefault();
    dispatch(clearReceipes());
  };

  const handleClearForm = () => {
    setName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div>
      <form id="form">
        <label>Name:</label>
        <br />
        <input
          name="name"
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <br />
        <label>Ingredients:</label>
        <br />
        <input
          name="ingred"
          type="text"
          onChange={(event) => setIngredients(event.target.value)}
          value={ingred}
        />
        <br />
        <label>Instructions:</label>
        <br />
        <input
          name="instr"
          type="text"
          onChange={(event) => setInstructions(event.target.value)}
          value={instr}
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
        <button
          id="deleteAllBtn"
          className="button_stuff"
          onClick={handleDeleteAll}
        >
          Delete Receipes
        </button>
    </div>
  );
}

export default ReceipeForm;
/*
<label>Name: </label>
        <br></br>
        <input
          ref={(input) => (props.inputName = input)}
          name="name"
          type="text"
        />
        <br></br>
        <label>Ingredients: </label>
        <br></br>
        <input
          ref={(input) => (props.inputIngred = input)}
          name="ingred"
          type="text"
        />
        <br></br>
        <label>Instructions: </label>
        <br></br>
        <input
          ref={(input) => (props.inputInstr = input)}
          name="instr"
          type="text"
        />
*/
