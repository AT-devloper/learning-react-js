import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,remove,Tick,Untick,Edits} from "./1mayli";
import Table from 'react-bootstrap/Table';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from "react-icons/fa";

const Do=()=>{
    const data=useSelector(state=>state.list.work);
    const disp = useDispatch();
    const[inp,setinp]= useState("");
    const[btnstatus,setBtnstatus]=useState(true)
    const[eid,setEid]=useState("");
    console.log(data);

    const Edit=(id,task)=>{
       setinp(task)
       setBtnstatus(false)
       setEid(id)
    }

    const Edited=()=>{
        disp(Edits({id:eid,task:inp}));
        setBtnstatus(true)
    }

    let sn=0;
    const lim=data.map((key,index)=>{
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
                <td><MdDelete  className="delIcon" style={{color:"red"}} 
                onClick={()=>{disp(remove({id:index}))}} />
                </td>
                <td><button onClick={()=>{disp(Tick({id:key.id}))}} >Tick</button></td>
                <td><button onClick={()=>{disp(Untick({id:key.id}))}} >Untick</button></td>
                <td>
                    <FaEdit className="editIcon" style={{color:"skyblue"}} 
                 onClick={()=>{Edit(key.id , key.task)}}  />
                 </td>
            </tr>
            
            </>
        )
    })

    return(
        <>
        <label id="l">Enter items  :-  </label> 
        < input type="text" value={inp} 
        onChange={(e)=>{setinp(e.target.value)}}   />
        
        {btnstatus?
        (<><button onClick={()=>{disp(add({id:Date.now(),task:inp,status:false}))}}> Add </button></>)
        :(<><button onClick={Edited} style={{background:"lightblue"}}>Edited</button></>)}
        
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