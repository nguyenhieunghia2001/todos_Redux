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
  },
});
const { reducer, actions } = todo;
export const { addTodo } = actions;
export default reducer;