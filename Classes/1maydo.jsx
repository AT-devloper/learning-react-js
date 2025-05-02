import { useState } from "react";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { add ,removeli,Tick,Untick} from "./1mayli";

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
            <tr align="center">
                <td>{sn}</td>
                <td>
                    {key.status ? 
                    (<><span style={{textDecoration:"line-through red"}}>{key.task}</span></>)
                    : (<>{key.task}</>)}
                    </td>
                <td><button onClick={()=>{disp(removeli({id:index}))}}> Remove </button></td>

                <td><button onClick={()=>{disp(Tick({id:key.id}))}} >Tick</button></td>

                <td><button onClick={()=>{disp(Untick({id:key.id}))}} >Untick</button></td>

                <td><button onClick={""} >Edit</button></td>
            </tr>
            
            </>
        )
    })

    return(
        <>
        <label id="l">Enter items  :-  </label> 
        < input type="text" value={inp} 
        onChange={(e)=>{setinp(e.target.value)}}   />
        
        <button onClick={()=>{disp(add({id:Date.now(),task:inp,status:false}))}}> Add </button>

        <hr/>

        <h2 align="center">Your List-Items</h2>
        <Table striped bordered hover>

      <thead>
            <tr align="center">
                <th>S.No</th>
                <th>Your-task</th>
                <th>Remove</th>
                <th>Tick</th>
                <th>Untick</th>
                <th>Edit</th>
            </tr>
        </thead>    
        <tbody>
            {lim}
        </tbody>
        </Table>
        </>
    )
}

export default Do;