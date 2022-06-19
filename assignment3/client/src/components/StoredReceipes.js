import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StoredReceipeCard from "./StoredReceipeCard";
import { getStoredReceipesAsync } from "../redux/users/thunks";

export default function StoredReceipes() {
  const receipes = useSelector((state) => state.users.storedReceipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoredReceipesAsync());
  }, []);
  return (
    <div id="receipes">
      {receipes.map((data, key) => (
        <StoredReceipeCard
          key={key}
          name={data.name}
          ingredients={data.ingredients}
          instructions={data.instructions}
          id={data.id}
          data={data}
        />
      ))}
    </div>
  );
}
