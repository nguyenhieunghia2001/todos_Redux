import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
// export const fetchTodos = () => async (dispatch) => {
//   const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
//   dispatch(setTodo(res.data));
// }

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
});
const { reducer, actions } = todo;
export const { addTodo, active, remove } = actions;
export default reducer;
