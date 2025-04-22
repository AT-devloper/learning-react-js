import axios from "axios";
import { useState,useEffect } from "react";

const Dplay=()=>{
    const[sdata,setSdata]=useState([]);

    const loadD=async()=>{
        let api="http://localhost:3000/student";
        let res=await axios.get(api);
        console.log(res);
        setSdata(res.data);
}
useEffect(()=>{
    loadD();
},[])
    
const sd=sdata.map((key)=>{
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
        <h1>DISPLAY</h1>
        <br/>

        <h4>Students Data :- </h4>
        <table border="3" width="550" id="tb">
                        
            <tr>

            <th>Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>

            </tr>

            {sd}

        </table>
        </>
    )
}

export default Dplay;