import { useState,useMemo } from "react";


const Umemo=()=>{
    const [age,setAge]=useState(0);
    const [name,setName]=useState("");

    const mymulti = useMemo(()=>{
        for(var i=0; i<1000000000; i++);{}
        return age*2;
    },[age]);


    return(
        <>

<h1>
            Any Number : <input type="number" value={age} 
            onChange={(e)=>{setAge(e.target.value)}}/>
            <br/>
            Any Name : <input type="text" value={name} 
            onChange={(e)=>{setName(e.target.value)}}/>
        </h1>
            <br/>
        <h2> MULTIPLy BY 2 OF GIVEN AGE IS := {mymulti}</h2>
 

        </>
    )
}
export default Umemo;
