import { connect } from "react-redux";
import TodoApp from '../components/TodoApp.js'
import { addTodo } from "../redux/todo";

const mapStatetoProps = (state) => {
  return {
    todos: state.todo.items,
  };
};
const mapActiontoProps = {
  addTodo,
};
export default connect(mapStatetoProps, mapActiontoProps)(TodoApp);
