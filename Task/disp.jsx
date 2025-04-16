import { useState,useEffect } from "react";
import axios from "axios";

const Disp=()=>{

const[mydata,setMydata]= useState([]);

const loadData= async()=>{
    let api="http://localhost:3000/Employ";
    const respon=await axios.get(api);
    console.log(respon);
    setMydata(respon.data);
}

useEffect(()=>{
    loadData();
},[])

const ans=mydata.map((key)=>{
    return(
        <>
        <tr >
            <td> {key.Name} </td>
            <td> {key.Emno} </td>
            <td> {key.City} </td>
            <td> {key.Salery} </td>
        </tr>
        </>
    )
})

    return(
        <>
        <h1>-: Display Page :-</h1>
        <hr/>

        <table border="2" width="400" >
            <tr>
                <th>Name</th>
                <th>EmpNo.</th>
                <th>City</th>
                <th>Salery</th>
            </tr>
            {ans}
        </table>
        </>
    )    

}

export default Disp;