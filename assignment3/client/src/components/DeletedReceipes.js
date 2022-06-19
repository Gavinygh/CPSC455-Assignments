import React, { useEffect }from "react";
import { useSelector, useDispatch } from "react-redux";
import DeletedReceipeCard from "./DeletedReceipeCard";
import { getDeletedReceipesAsync } from "../redux/users/thunks";

export default function Receipes() {
  const receipes = useSelector((state) => state.users.deletedReceipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeletedReceipesAsync());
  },[])
  
  return (
    <div id="receipes">
      {receipes.map((data, key) => (
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
