
import { configureStore } from "@reduxjs/toolkit"
import itm from "./1mayli"

const Stodo =configureStore({
    reducer:{
        list:itm
    }
})

export default Stodo;