import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo";
import authReducer from "./auth";

const rootsReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});

export default rootsReducer;
