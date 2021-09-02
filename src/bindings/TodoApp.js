import { connect } from "react-redux";
import TodoApp from "../components/TodoApp.js";
import { addTodo, fetchTodos } from "../redux/todo";

const mapStatetoProps = (state) => {
  return {
    todos: state.todo.items,
  };
};
const mapActiontoProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  fetchTodo: () => dispatch(fetchTodos()),
});
export default connect(mapStatetoProps, mapActiontoProps)(TodoApp);
