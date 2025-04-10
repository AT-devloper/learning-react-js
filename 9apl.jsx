import { useState } from "react";
import axios from "axios";

const Fom1 =()=>{
    const [input,setInput]=useState({ });

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values, [name] : value}));
        console.log(input);
    }

    const handleSubmit = async()=>{
        let api ="http://localhost:3000/Student";
        const respo = await axios.post(api,input);
        console.log(respo);
        alert(" => Data saved => ");
    }

    return(
        <>
            <div id="fm" align="center">
           
            <h1> Application form !! </h1> <br/>
        
                <h3>

                Name  :- < input type="text"   name="name"  onChange={handleInput}   />  <br/><br/>
                        
                Rolln :- < input type="text"  name="roll"  onChange={handleInput}    />  <br/><br/>

                City  :- < input type="text"   name="city"  onChange={handleInput}   />  <br/><br/>
                        
                Fees  :- < input type="text"   name="fees"  onChange={handleInput}   />  <br/><br/>

                <button onClick={handleSubmit} id="btn"> Save </button>
               
            </h3> 
            </div>
        
        </>
    )
}


export default Fom1;