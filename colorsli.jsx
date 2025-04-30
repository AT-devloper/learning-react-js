import { createSlice } from "@reduxjs/toolkit";
import { changeColor } from "./Practice/color";



const colorSli=createSlice({
    name:"mycolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        changeColor:(state , actions)=>{
            console.log(actions.payload)
            state.color=actions.payload
        }
    }
})

export const {changColor}=colorSli.actions;
export default colorSli.reducer;