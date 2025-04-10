import { useState } from "react"
import axios from "axios"

const Prac=()=>{
    const[input,setInput]=useState({ });

    const hinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values =>({...values,[name] : value}));
        console.log(input);
    }

    const hsubmit=async()=>{
        let api="http://localhost:3000/Student";
        const response=await  axios.post(api,input);
        console.log(response);
        alert("Practice Complete")

    }

    return(
        <>
        <div id="fm">
        <h1>Practice form </h1>

        <h4 >
            Name :- <input type="text" name="name" onChange={hinput} /> <br/><br/>
            contact :- <input type="text" name="contact" onChange={hinput} /><br/><br/>

           <button onClick={hsubmit}>Save</button> 



        </h4>
        </div>


        </>
    )
}

export default Prac;