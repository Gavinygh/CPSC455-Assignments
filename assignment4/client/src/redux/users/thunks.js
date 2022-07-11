import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getStoredReceipesAsync = createAsyncThunk(
  actionTypes.GET_STOREDRECEIPES,
  async () => {
    return await UserService.getStoredReceipes();
  }
);

export const getDeletedReceipesAsync = createAsyncThunk(
  actionTypes.GET_DELETEDRECEIPES,
  async () => {
    return await UserService.getDeletedReceipes();
  }
);

export const addReceipeAsync = createAsyncThunk(
  actionTypes.ADD_RECEIPE,
  async (receipe) => {
    return await UserService.addReceipe(receipe);
  }
);

export const deleteReceipeAsync = createAsyncThunk(
  actionTypes.DELETE_RECEIPE,
  async (receipe) => {
    return await UserService.deleteReceipe(receipe);
  }
);

export const restoreReceipeAsync = createAsyncThunk(
  actionTypes.RESTORE_RECEIPE,
  async (receipe) => {
    return await UserService.restoreReceipe(receipe);
  }
);


export const editReceipeAsync = createAsyncThunk(
  actionTypes.EDIT_RECEIPE,
  async (receipe) => {
    return await UserService.editReceipe(receipe);
  }
);

