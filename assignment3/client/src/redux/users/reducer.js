import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getStoredReceipesAsync, getDeletedReceipesAsync, 
  addReceipeAsync, deleteReceipeAsync, restoreReceipeAsync, editReceipeAsync } from './thunks';

const INITIAL_STATE = {
  storedReceipes: [],
  deletedReceipes: [],
  getStoredReceipes: REQUEST_STATE.IDLE,
  getDeletedReceipes: REQUEST_STATE.IDLE,
  addReceipe: REQUEST_STATE.IDLE,
  deleteReceipe: REQUEST_STATE.IDLE,
  restoreReceipe: REQUEST_STATE.IDLE,
  editReceipe: REQUEST_STATE.IDLE,
  error: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStoredReceipesAsync.pending, (state) => {
        state.getStoredReceipes = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getStoredReceipesAsync.fulfilled, (state, action) => {
        state.getStoredReceipes = REQUEST_STATE.FULFILLED;
        state.storedReceipes = action.payload;
      })
      .addCase(getStoredReceipesAsync.rejected, (state, action) => {
        state.getStoredReceipes = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(getDeletedReceipesAsync.pending, (state) => {
        state.getDeletedReceipes = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getDeletedReceipesAsync.fulfilled, (state, action) => {
        state.getDeletedReceipes = REQUEST_STATE.FULFILLED;
        state.deletedReceipes = action.payload;
      })
      .addCase(getDeletedReceipesAsync.rejected, (state, action) => {
        state.getDeletedReceipes = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addReceipeAsync.pending, (state) => {
        state.addReceipe = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addReceipeAsync.fulfilled, (state, action) => {
        state.addReceipe = REQUEST_STATE.FULFILLED;
        state.storedReceipes.push(action.payload);
      })
      .addCase(addReceipeAsync.rejected, (state, action) => {
        state.addReceipe = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(deleteReceipeAsync.pending, (state) => {
        state.deleteReceipe = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteReceipeAsync.fulfilled, (state, action) => {
        state.deleteReceipe = REQUEST_STATE.FULFILLED;
        const foundReceipe = state.storedReceipes.find(receipe => receipe.id === action.payload.id);
        const index = state.storedReceipes.indexOf(foundReceipe);

        state.storedReceipes.splice(index, 1);
        state.deletedReceipes.push(foundReceipe);
      })
      .addCase(deleteReceipeAsync.rejected, (state, action) => {
        state.deleteReceipe = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(restoreReceipeAsync.pending, (state) => {
        state.restoreReceipe = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(restoreReceipeAsync.fulfilled, (state, action) => {
        state.restoreReceipe = REQUEST_STATE.FULFILLED;
        const foundReceipe = state.deletedReceipes.find(receipe => receipe.id === action.payload.id);
        const index = state.deletedReceipes.indexOf(foundReceipe);

        state.deletedReceipes.splice(index, 1);
        state.storedReceipes.push(foundReceipe);
      })
      .addCase(restoreReceipeAsync.rejected, (state, action) => {
        state.restoreReceipe = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(editReceipeAsync.pending, (state) => {
        state.editReceipe = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(editReceipeAsync.fulfilled, (state, action) => {
        state.editReceipe = REQUEST_STATE.FULFILLED;
        const foundReceipe = state.storedReceipes.find(receipe => receipe.id === action.payload.id);
        const index = state.storedReceipes.indexOf(foundReceipe);

        state.storedReceipes[index].name = action.payload.name;
        state.storedReceipes[index].ingredients = action.payload.ingredients;
        state.storedReceipes[index].instructions = action.payload.instructions;
      })
      .addCase(editReceipeAsync.rejected, (state, action) => {
        state.editReceipe = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  }
});

export default usersSlice.reducer;
