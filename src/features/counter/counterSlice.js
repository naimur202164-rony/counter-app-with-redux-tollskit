import { createSlice } from "@reduxjs/toolkit";



const initialState={
    value:1,
}

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        incremnet:(state)=>{
            state.value +=1;
        },
        decrement:(state)=>{
            state.value -=1;
        }
    }
})


export const {incremnet,decrement}=counterSlice.actions

export default counterSlice.reducer;