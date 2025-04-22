import { useState } from "react"

const Ust=()=>{
    const[name,setName]=useState("Ayush");
    const[color,setColor]=useState("red");
    return(
        <>
        <h1>Welcome : {name}</h1>
        <button onClick={()=>{setName("Poddar")}}>Click</button>

        <h1 style={{color:color}}>Color : {color}</h1>
        <button onClick={()=>{setColor("blue")}}>Blue</button>
        <button onClick={()=>{setColor("green")}}>Green</button>
        <button onClick={()=>{setColor("yellow")}}>Yellow</button>
        
                        
        </>)
}
export default Ust;

