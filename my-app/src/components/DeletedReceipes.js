import React from "react";
import { useSelector } from "react-redux";
import DeletedReceipeCard from "./DeletedReceipeCard";

export default function Receipes() {
  const receipes = useSelector((state) => state.receipesReducer);

  return (
    <div id="receipes">
      {receipes.deletedReceipes.map((data, key) => (
        <DeletedReceipeCard
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
