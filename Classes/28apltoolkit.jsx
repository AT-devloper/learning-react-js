
import { configureStore } from "@reduxjs/toolkit";
import myRedu from "./28aplslice"
     
const Store=configureStore({
        reducer:{
            mycounter:myRedu
        }  
    })

    export default Store;