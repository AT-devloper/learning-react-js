import { useMemo } from "react";
import { useState } from "react";

      




const My=()=>{

    const[add,setAdd]=useState(0);
        const [sub,setSub]=useState(100);


        const Multi=useMemo(()=>{
            console.log("####");
            return add*2;
        },[]);
    return(
        <>
        <h1>Add : {add}</h1>
            <button onClick={()=>{setAdd(add+1)}}>Add</button>

            <h1>subs : {sub}</h1>
            <button onClick={()=>{setSub(sub-2)}}>Subs</button>

            <hr/>
<h2>Mutli : {Multi}</h2>            


        </>
    )
}


export default My;