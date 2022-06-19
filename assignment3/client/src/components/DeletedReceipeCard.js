import React from "react";
import { useDispatch } from "react-redux";
import { restoreReceipeAsync } from "../redux/users/thunks";

export default function DeletedReceipeCard(props) {
  const dispatch = useDispatch();

  const handleRestore= (event) => {
    event.preventDefault();
    dispatch(restoreReceipeAsync(props.data));
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
