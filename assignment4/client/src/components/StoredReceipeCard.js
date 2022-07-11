import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReceipeAsync } from "../redux/users/thunks";
import Popup from "./Popup";

export default function StoredReceipeCard(props) {
  const dispatch = useDispatch();
  const [isPopup, setIsPopup] = useState(false);

  const handlePopup = () => {
    setIsPopup(!isPopup);
  };

  const handleDelete= (event) => {
    event.preventDefault();
    dispatch(
      deleteReceipeAsync(props.data)
    );
  };

  return (
    <ul>
      <li> Name: {props.name} </li>
      <li> Ingredients: {props.ingredients} </li>
      <li> Instructions: {props.instructions} </li>
      <li> Completion time: {props.completion_time} </li>
      <button
        id="delete_button"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button id="view_button" onClick={handlePopup}>
        Edit
      </button>
      {isPopup && 
      <Popup 
      toggle={handlePopup}
      name={props.name}
      ingredients={props.ingredients}
      instructions={props.instructions}
      completion_time={props.completion_time}
      id={props.id} />}
    </ul>
  );
}
