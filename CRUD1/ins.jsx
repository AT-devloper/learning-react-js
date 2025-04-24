
import { useState } from "react";
import axios from "axios";

const Ins=()=>{
    const [input , setInput]=useState({})

    const handleput=(e)=>{
        let name =e.target.name;
        let value =e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input)
    }

    const handlesmit=async()=>{
        let api="http://localhost:3000/student";
        const respo=await axios.post(api,input);
        console.log(respo)

        alert("<--DATA SEVED-->")
        
    }
    return(
        <>
           <h1>INSERT</h1>
           <br/>

        <h3 id="bom">

        RollNo. :- <input type="text" name="roll" onChange={handleput} /> <br/><br/>
        Name :- <input type="text" name="name" onChange={handleput} /> <br/><br/>
        City :- <input type="text" name="city" onChange={handleput} /> <br/><br/>
        Fees :- <input type="text" name="fee" onChange={handleput} /> <br/><br/>

        <button onClick={handlesmit}>Save</button>
        </h3>


        </>
    )
}

export default Ins;