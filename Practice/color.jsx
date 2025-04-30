import { createSlice } from "@reduxjs/toolkit"
const colSlice=createSlice({
    name:"Mecolor",
    initialState:{
        color:"wheat"
    },
    reducers:{
        changeColor:(state)=>{
            state.color="red";
        }
    }
})
export default colSlice.reducer;
export const{changeColor}=colSlice.actions;