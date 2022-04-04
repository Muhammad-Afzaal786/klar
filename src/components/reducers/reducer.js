import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    val : 0,
}

export const customReducer = createReducer(initialState,{
    increament : (state)=>{
        state.val = state.val +1;
    },
})