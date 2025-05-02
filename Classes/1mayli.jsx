import { createSlice } from "@reduxjs/toolkit";

const Lislic= createSlice({

    name:"list",

    initialState:{
        work:[]
    },

    reducers:{
        add:(state,actions)=>{
            state.work.push(actions.payload);
        },
        removeli:(state,actions)=>{
            state.work.splice(actions.payload.id, 1);
        }
    }
   
})

export const {add,removeli}=Lislic.actions;
export default Lislic.reducer;