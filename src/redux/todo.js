import axios from 'axios';

const initialState = {
  items: [],
  activeId: null,
};
// export const fetchTodos = () => async (dispatch) => {
//   const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
//   dispatch(setTodo(res.data));
// } 

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
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
