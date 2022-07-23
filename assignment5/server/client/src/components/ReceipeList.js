import React from "react";
import StoredReceipes from "./StoredReceipes";
import DeletedReceipes from "./DeletedReceipes";
import { useState } from "react";

export default function ReceipeList() {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isStored, setIsStored] = useState(true);

  const handleIsDeleted = () => {
    setIsDeleted(true);
    setIsStored(false);
  };

  const handleIsStored = () => {
    setIsDeleted(false);
    setIsStored(true);
  };

  return (
    <div id="receipe_list">
      <h3>Receipes</h3>
      {isStored && <StoredReceipes />}
      {isDeleted && <DeletedReceipes />}
      <button
        id="show_stored"
        className="button_stuff"
        onClick={handleIsStored}
      >
        Show stored
      </button>
      <button
        id="show_deleted"
        className="button_stuff"
        onClick={handleIsDeleted}
      >
        Show Deleted
      </button>
    </div>
  );
}
