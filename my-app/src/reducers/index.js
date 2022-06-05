import { combineReducers } from "redux";

let storedReceipes = [
  {
    name: "poutine",
    ingredients: "fries, source",
    instructions: "bla bla"
  },
  {
    name: "bbb",
    ingredients: "fries, source",
    instructions: "bla bla"
  },
  {
    name: "aaa",
    ingredients: "fries, source",
    instructions: "bla bla"
  }
];

const receipesReducer = (receipes = storedReceipes, action) => {
  if (action.type === "CLEAR_RECEIPES") {
    return [];
  } else if (action.type === "ADD_RECEIPE") {
    let newArray = [action.payload];
    return newArray.concat(receipes);
  } else if (action.type === "DELETE_RECEIPE") {
    let newArray = receipes.filter((item) => {
      return !(
        action.payload.name === item.name &&
        action.payload.ingredients === item.ingredients &&
        action.payload.instructions === item.instructions
      );
    });
    return newArray;
  }
  return receipes;
};

const rootReducer = combineReducers({
  receipesReducer
});

export default rootReducer;