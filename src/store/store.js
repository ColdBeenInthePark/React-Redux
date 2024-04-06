import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counterSlice"
import heightReducer from  "../store/heightSlice"
export default configureStore({
    reducer: {
        counter: counterReducer,
        height: heightReducer,
    }
});

