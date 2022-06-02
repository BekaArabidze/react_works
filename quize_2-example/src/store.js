import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, } from 'redux'
import jokeSlice from './redux/jokeSlice'
import logger from 'redux-logger'
import thunk from 'redux-thunk'



const rootReducer = combineReducers({
    jokes: jokeSlice
})

export default configureStore({ reducer: rootReducer, middleware: [thunk, logger] })

