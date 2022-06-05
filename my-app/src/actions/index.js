export const clearReceipes = () => {
  return {
    type: "CLEAR_RECEIPES"
  };
};

export const addReceipe = (receipe) => {
  return {
    type: "ADD_RECEIPE",
    payload: receipe
  };
};

export const deleteReceipe = (receipe) => {
  return {
    type: "DELETE_RECEIPE",
    payload: receipe
  };
};
