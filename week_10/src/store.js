import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import counterSlice from "./redux/counterSlice"
import todoSlice from "./redux/todoSlice"
import logger from "redux-logger"


const rootReducer = combineReducers({
    counter: counterSlice,
    todos: todoSlice
})


export default configureStore({
    reducer: rootReducer,
    middleware:[logger]
})