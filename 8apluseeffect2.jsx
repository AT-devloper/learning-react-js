
import { useState,useEffect } from "react";
const Eff2=()=>{
    const[count,setCount]=useState(0);
    
    useEffect(()=>{
        setTimeout(() => {
            setCount(count+1);
        }, 2000);
    },[])
    return(
        <>
        <h1 id="count2">Type 2 :-- {count}</h1>
        </>

    )
}
export default Eff2;