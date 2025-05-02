import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add ,removeli } from "./1mayli";

const Do=()=>{
    const data=useSelector(state=>state.list.work);
    const disp = useDispatch();
    const[inp,setinp]= useState("");

    console.log(data);

    let sn=0;
    const lim=data.map((key , index)=>{
        sn++;
        return(
            <>
            <tr>
                <td>{sn}</td>
                <td>{key.task}</td>
                <td>
                    
                    <button onClick={()=>{disp(removeli({id:index}))}}> Remove </button>
                     
                     </td>
            </tr>
            
            </>
        )
    })

    return(
        <>
        Enter items :- <input type="text" value={inp} 
        onChange={(e)=>{setinp(e.target.value)}}   />
        
        <button onClick={()=>{disp(add({task:inp}))}}> Add </button>

        <hr/>

        <h2>Your list</h2>
        <table border="1" width="400px">
            
            <tr>
                <th>S.No</th>
                <th>YOUR-TASK</th>
                <th>Remove</th>
            </tr>

            {lim}

        </table>
        </>
    )
}

export default Do;