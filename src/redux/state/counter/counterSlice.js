import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 1
    },
    reducers: {
        increase: state => {
            state.value = state.value * 3
        },
        decrease: state => {
            state.value--
        }
    }
})


export const {increase, decrease} = counterSlice.actions;
export default counterSlice.reducer;