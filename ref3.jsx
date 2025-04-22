import { useEffect, useRef, useState } from "react";





const Ref3=()=>{

    const [name,setname] =useState("");
    const cntRef=useRef(0);
    console.log(cntRef);
    useEffect(()=>{
        cntRef.current=cntRef.current+1;
    })
    return(
    <>
    <h1>
    Enter name :<input type=" text " value={name} 
    onChange={(e)=>{setname(e.target.value)}}   />
    </h1>
    <h2>My Render Count : {cntRef.current}</h2>
    </>
    )
}


export default Ref3;