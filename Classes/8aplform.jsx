import { useState } from "react";
const Fom=()=>{

        const [name,setName]=useState(" ");
        const [city,setCity]=useState(" ");
        const handleSubmit=()=>{ alert(`My name : ${name}, My city : ${city}.`) }

    return(
        <>
    <div id="fm">
            <h1>Application form !! </h1> 
            <br/>
        
                <h3>
                Name  :- <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}      />  <br/><br/>
                        
                City  :- <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}       /> <br/><br/>

                <button onClick={handleSubmit}> Save </button>
                </h3>
                </div>
        
        </>
    )
}

export default Fom ;