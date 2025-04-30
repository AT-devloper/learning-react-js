
import { createSlice } from "@reduxjs/toolkit"


const cSlice=createSlice({
    name:"mycounter",
    initialState:{
 cnt:0
    },
    reducers:{
        add:(state)=>{
            state.cnt++;
        },
        sub:(state)=>{
            state.cnt--;
        }
    }
})


export const {add, sub}= cSlice.actions;
export default cSlice.reducer;