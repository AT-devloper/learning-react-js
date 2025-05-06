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
        remove:(state,actions)=>{
            state.work.splice(actions.payload.id, 1);
        },
        // remove:(state,actions)=>{
        // state.     
        // },
        Tick:(state,actions)=>{
            for(var i=0;i<state.work.length;i++)
            {
                if(state.work[i].id==actions.payload.id)
                {
                    state.work[i].status=true;
                }
            }
        },
        Untick:(state,actions)=>{
            for(var i=0;i<state.work.length;i++)
            {
                if(state.work[i].id==actions.payload.id)
                {
                    state.work[i].status=false;
                }
            }
        }
      
         
    }
   
})

export const {add,remove,Tick,Untick}=Lislic.actions;
export default Lislic.reducer;