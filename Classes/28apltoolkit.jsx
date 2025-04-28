
import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./28aplslice"

const store=()=> configureStore({
    
        reducer:{
            mycouter:myreducer
        }  
    })


     
    export default store;