import { useContext } from "react";
import { mycontext } from "../App";


const Bho=()=>{
    const {name}= useContext{mycontext};
    return(
        <>
        <h1>Welcome to Class {name}</h1>
        </>
    )
}
export default Bho;