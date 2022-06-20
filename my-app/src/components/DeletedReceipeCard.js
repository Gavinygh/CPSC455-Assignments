import React from "react";
import { useDispatch } from "react-redux";
import { restoreReceipe } from "../actions";

export default function DeletedReceipeCard(props) {
  const dispatch = useDispatch();

  const handleRestore= (event) => {
    event.preventDefault();
    dispatch(
      restoreReceipe(props.data)
    );
  };

  return (
    <ul>
      <li> Name: {props.name} </li>
      <li> Ingredients: {props.ingredients} </li>
      <li> Instructions: {props.instructions} </li>
      <button
        id="restore_button"
        onClick={handleRestore}
      >
        restore
      </button>
    </ul>
  );
}
