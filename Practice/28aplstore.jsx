import { configureStore } from "@reduxjs/toolkit";

import clrReduc from "./color";

const Tstore=configureStore({
    reducer:{
        Mecolor:clrReduc
    }
})

export default Tstore;