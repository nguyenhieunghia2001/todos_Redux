import { createStore } from "redux";
import rootsReducer from "./redux/store";

const store = createStore(rootsReducer)
export default store;