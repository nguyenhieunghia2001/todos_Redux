import axios from 'axios';

const initialState = {
  items: [],
};
const ADD_TODO = "ADD_TODO";
const SET_TODO = "SET_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});
export const setTodo = (items) => ({
  type: SET_TODO,
  payload: items,
});

export const fetchTodos = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  dispatch(setTodo(res.data));
} 

const reducer = (state = initialState, action) => {
 
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.payload);
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "SET_TODO":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
