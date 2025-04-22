
import { useState,createContext} from "react";
const myContext=createContext();

const Usercon=({children})=>{
    const[name , setName ]=useState("Ayush");

    return(
        <>
        <myContext.Provider value={{name}}>
            {children}
        </myContext.Provider>
        </>
    )
}
export default Usercon;
export {myContext};