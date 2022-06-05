import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReceipe } from "../actions";
import Popup from "./Popup";

export default function ReceipeCard(props) {
  const dispatch = useDispatch();
  const [isPopup, setIsPopup] = useState(false);

  const handlePopup = () => {
    setIsPopup(!isPopup);
  };

  const handleDelete= (event) => {
    event.preventDefault();
    dispatch(
      deleteReceipe(props.data)
    );
  };

  return (
    <ul>
      <li> Name: {props.name} </li>
      <li> Ingredients: {props.ingredients} </li>
      <li> Instructions: {props.instructions} </li>
      <button
        id="delete_button"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button id="view_button" onClick={handlePopup}>
        View
      </button>
      {isPopup && 
      <Popup 
      toggle={handlePopup} 
      name={props.name} 
      ingredients={props.ingredients}
      instructions={props.instructions} />}
    </ul>
  );
}
