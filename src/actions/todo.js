export const addTodo = (item) => ({
  type: 'ADD_TODO',
  payload: item,
});
export const setTodo = (items) => ({
  type: 'SET_TODO',
  payload: items,
});
