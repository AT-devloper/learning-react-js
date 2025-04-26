import { useMemo, useState } from "react";

const Dume=()=>{

    const [num,setnum]=useState("");
    const [name,setname]=useState("");



    //                          => without MEMO <=
    // function mymulti(){                            
    //     for(var i=0; i<1000000000; i++);{}
    //     return num*2;
    // }




    //                             => with MEMO <=
    const mymulti = useMemo(()=>{
        for(var i=0; i<1000000000; i++);{}
        return num*2;
    },[num]);

    return(
        <>
        <h1>
            Any Number : <input type="number" value={num} 
            onChange={(e)=>{setnum(e.target.value)}}/>
            <br/>
            Any Name : <input type="text" value={name} 
            onChange={(e)=>{setname(e.target.value)}}/>
        </h1>
            <br/>
        <h2>MULTIPLYE BY 2 OF GIVEN NUMBER IS := {mymulti}</h2>
        </>
    )
}

export default Dume;