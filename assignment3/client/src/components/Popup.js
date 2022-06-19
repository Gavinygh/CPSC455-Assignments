import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { editReceipeAsync } from "../redux/users/thunks";

export default function PopUp(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [ingred, setIngredients] = useState("");
  const [instr, setInstructions] = useState("");

  const handleClick = () => {
   props.toggle();
  };

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(
      editReceipeAsync({
        id: props.id,
        name: name,
        ingredients: ingred,
        instructions: instr
      })
    );
    handleClearForm();
  };

  const handleClearForm = () => {
    setName('');
    setIngredients('');
    setInstructions('');
  };
  
  return (
   <div className="Popup">
     <div className="Popup_content">
     <span className="close" onClick={handleClick}>&times;</span>
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
      <button
          id="editReceipeBtn"
          className="button_stuff"
          onClick={handleEdit}
        >
          Submit
        </button>
    </div>
   </div>
  );
  }
