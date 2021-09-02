import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlice'

const rootReducer = {
    todos: todoReducer 
}

const store = configureStore({
    reducer: rootReducer
})

export default store;