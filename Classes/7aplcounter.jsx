// useState
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Counter=()=>{
const[cnt,setCnt]=useState(0)
const myInc=()=>{
    setCnt(cnt+1);
}
const myDec=()=>{
    if(cnt<1)
    {
        alert("not allowed less then 0")
    }
    else
    {
        setCnt(cnt-1)
    }
}
    return(
        <>
        <div className='container'>
        <h1>_COUNTER APP_</h1><br/>

        <h2>Count : {cnt}</h2> <br/>
        <Button variant="outline-success"type='button' onClick={myInc}>+1</Button>
        <Button variant="outline-warning"type='button' onClick={myDec}>-1</Button>
        <Button variant="outline-danger" type='button' onClick={()=>{setCnt(0)}}>0</Button>
        
        </div>
        </>
    )
}
export default Counter;