import { combineReducers } from "redux";

let receipesList = {
  storedReceipes: [
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
  ],
  deletedReceipes: []
};

const receipesReducer = (receipes = receipesList, action) => {
  if (action.type === "CLEAR_RECEIPES") {
    let newArray = { storedReceipes: [], deletedReceipes: [] };
    newArray.deletedReceipes = receipes.storedReceipes.concat(
      receipes.deletedReceipes
    );
    return newArray;
  } else if (action.type === "ADD_RECEIPE") {
    let newArray = { storedReceipes: [action.payload], deletedReceipes: [] };
    newArray.storedReceipes = newArray.storedReceipes.concat(
      receipes.storedReceipes
    );
    newArray.deletedReceipes = receipes.deletedReceipes;
    return newArray;
  } else if (action.type === "DELETE_RECEIPE") {
    let newArray = { storedReceipes: [], deletedReceipes: [] };
    newArray.storedReceipes = receipes.storedReceipes.filter((item) => {
      return !(
        action.payload.name === item.name &&
        action.payload.ingredients === item.ingredients &&
        action.payload.instructions === item.instructions
      );
    });
    newArray.deletedReceipes = [action.payload].concat(
      receipes.deletedReceipes
    );
    return newArray;
  } else if (action.type === "RESTORE_RECEIPE") {
    let newArray = { storedReceipes: [], deletedReceipes: [] };
    newArray.deletedReceipes = receipes.deletedReceipes.filter((item) => {
      return !(
        action.payload.name === item.name &&
        action.payload.ingredients === item.ingredients &&
        action.payload.instructions === item.instructions
      );
    });
    newArray.storedReceipes = [action.payload].concat(
      receipes.storedReceipes
    );
    return newArray;
  }
  return receipes;
};

const rootReducer = combineReducers({
  receipesReducer
});

export default rootReducer;
