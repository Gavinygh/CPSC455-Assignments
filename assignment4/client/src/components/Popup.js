import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { editReceipeAsync } from "../redux/users/thunks";

export default function PopUp(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState(props.name);
  const [ingred, setIngredients] = useState(props.ingredients);
  const [instr, setInstructions] = useState(props.instructions);
  const [comple_time, setCompletionTime] = useState(props.completion_time);

  const handleClick = () => {
   props.toggle();
  };

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(
      editReceipeAsync({
        _id: props.id,
        name: name,
        ingredients: ingred,
        instructions: instr,
        completion_time: comple_time
      })
    );
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
          defaultValue={props.name}
        />
        <br />
        <label>Ingredients:</label>
        <br />
        <input
          id="ingredients"
          name="ingred"
          type="text"
          onChange={(event) => setIngredients(event.target.value)}
          defaultValue={props.ingredients}
        />
        <br />
        <label>Instructions:</label>
        <br />
        <input
          id="instructions"
          name="instr"
          type="text"
          onChange={(event) => setInstructions(event.target.value)}
          defaultValue={props.instructions}
        />
        <br />
        <label>Completion time:</label>
        <br />
        <input
          id="completion_time"
          name="comple_time"
          type="text"
          onChange={(event) => setCompletionTime(event.target.value)}
          defaultValue={props.completion_time}
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
