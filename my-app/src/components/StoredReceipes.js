import React from "react";
import { useSelector } from "react-redux";
import StoredReceipeCard from "./StoredReceipeCard";

export default function StoredReceipes() {
  const receipes = useSelector((state) => state.receipesReducer);

  return (
    <div id="receipes">
      {receipes.storedReceipes.map((data, key) => (
        <StoredReceipeCard
          key={key}
          name={data.name}
          ingredients={data.ingredients}
          instructions={data.instructions}
          data={data}
        />
      ))}
    </div>
  );
}
