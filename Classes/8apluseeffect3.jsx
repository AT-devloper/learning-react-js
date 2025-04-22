
import { useState,useEffect } from "react";

const Eff3=()=>{
    const[count, setCount]=useState(0);
    const[multi, setMulti]=useState(0);

    useEffect(()=>{
        setMulti(count*2);
    }, [count] );
    
    return(
        <>
        <h1 id="count3">Type 2 :-- {count}</h1>
        <h2>Multiple by 2 :--{multi }</h2>
        <button onClick={()=>{setCount(count+1)}}>click</button>
        </>

    )
}
export default Eff3;
