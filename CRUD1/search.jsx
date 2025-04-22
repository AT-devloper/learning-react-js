import axios from "axios";
import { useState,useEffect } from "react";

const Search=()=>{
    const[name,SetName]=useState("");
    const[stud,setStud]=useState([]);

    const handin=async(e)=>{
        SetName(e.target.value);
        let api=`http://localhost:3000/student`;
        const repo=await axios.get(api);
        console.log(repo);
        setStud(repo.data);
    }

const std=stud.map((key)=>{

    const mystatus=key.name.includes(name);
    if(mystatus)
        
    return(
        <>
        <tr>
        <td>{key.roll}</td>    
        <td>{key.name}</td> 
        <td>{key.city}</td> 
        <td>{key.fee}</td> 
        </tr>       
        </>
    )
    })

    return(
        <>
        <h1>SEARCH HERE </h1> <br/>
        <h2>
        Enter Name :- <input type="text" value={name} on onChange={handin}  />
        </h2>
        <br/> 
        <h4>Student Data :- </h4>
        <table border="4" width="520" id="tb1">
            <tr>
                
            <th>Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>

            </tr>
            
            {std}

        </table>
        </>
    )}

export default Search;