import React from "react";
import { useSelector } from "react-redux";
import ReceipeCard from "./ReceipeCard";

export default function Receipes() {
  const receipes = useSelector((state) => state.receipesReducer);

  return (
    <div id="receipes">
      {receipes.map((data, key) => (
        <ReceipeCard 
        key={key}
        name={data.name} 
        ingredients={data.ingredients}
        instructions={data.instructions} 
        data={data} />
      ))}
    </div>
  );
}