
import { createSlice } from "@reduxjs/toolkit"


const Slice=createSlice({
    name:" ",
    initialState:{
        count:0
    },
    reducers:{
        add:(state)=>{
            state.count++;
        },
        sub:(state)=>{
            state.count--;
        }
    }
})


export const {add,sub}= Slice.actions;
export default Slice.reducer;