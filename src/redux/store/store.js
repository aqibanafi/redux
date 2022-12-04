import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../../redux/state/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})