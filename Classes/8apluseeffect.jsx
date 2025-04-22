import { useState,useEffect } from "react";
const Eff=()=>{
    const[count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
            },1000)
    })
    return(
        <>
        <h1 id="count1">Type 1 :-- {count}</h1>
        </>

    )
}
export default Eff;