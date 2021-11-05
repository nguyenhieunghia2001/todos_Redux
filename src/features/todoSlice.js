import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addTodoThunk = createAsyncThunk(
  "todo/add",
  async (payload, thunkAPI) =>
    new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(payload);
      }, 2000);
    })
);

const initialState = {
  items: [],
  isUpload: false,
};

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    active: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items = [
        ...state.items.slice(0, index),
        {
          ...state.items[index],
          isCompleted: !state.items[index].isCompleted,
        },
        ...state.items.slice(index + 1, state.items.length),
      ];
    },
    remove: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items = [
        ...state.items.slice(0, index),
        ...state.items.slice(index + 1, state.items.length),
      ];
    },
  },
  extraReducers: {
    [addTodoThunk.pending]: (state) => {
      state.isUpload = true;
    },
    [addTodoThunk.fulfilled]: (state, action) => {
      state.isUpload = false;
      state.items.push(action.payload);
    },
  },
});
const { reducer, actions } = todo;
export const { addTodo, active, remove } = actions;
export default reducer;
