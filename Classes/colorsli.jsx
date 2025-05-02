import { createSlice } from "@reduxjs/toolkit";

const colorSli=createSlice({
    name:"mycolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        changColor:(state,actions)=>{
            console.log(actions.payload);
            state.color=actions.payload
        }
    }
})

export const {changColor}=colorSli.actions;
export default colorSli.reducer;