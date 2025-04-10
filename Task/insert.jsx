import axios from "axios";
import { useState } from "react";

const Insert=()=>{
    const[input,setInput]= useState({})

        const handlein=(e)=>{
            let name=e.target.name;
            let value=e.target.value;
            setInput(values=>({...values, [name] : value}));
            console.log(input);
            
        }

        const handlesub=async()=>{
            let api="http://localhost:3000/Employ";
            const resp=await axios.post(api,input);
            console.log(resp);
            alert(" => Data saved => ");


        }
    


    return(
        <>
         <h1> -: Insert Data Page :- </h1> <br/>
        
        <h3>

        Name  :- < input type="text"   name="name"  onChange={handlein}   />  <br/><br/>
                
        EmpNo. :- < input type="text"  name="emno"  onChange={handlein}    />  <br/><br/>

        City  :- < input type="text"   name="city"  onChange={handlein}   />  <br/><br/>
                
        Salary  :- < input type="text"   name="salary"  onChange={handlein}   />  <br/><br/>

        <button onClick={handlesub} id="btn"> Save </button>
       
    </h3> 
        </>
    )
}
export default Insert;