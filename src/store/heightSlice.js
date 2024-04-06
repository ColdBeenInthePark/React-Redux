import {createSlice} from "@reduxjs/toolkit";

export const heightSlice = createSlice({
    name: "height",
    initialState: {
        value: 170
    },
    reducers: {
        increment: (state) => {
            state.value += 5;
        },
        decrement: (state) => {
            state.value -= 5;
        }
    }
});

export const {increment, decrement} = heightSlice.actions
export default heightSlice.reducer