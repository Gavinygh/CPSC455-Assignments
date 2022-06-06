import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addReceipe, clearReceipes } from "../actions";

function ReceipeForm() {
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
