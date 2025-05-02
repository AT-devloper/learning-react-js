

import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorsli"
const Sto= configureStore({
    reducer:{
        mycolor:colorReducer
    }
})


export default Sto;

