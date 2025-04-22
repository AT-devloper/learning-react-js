
import { useRef } from "react"



const Ref=()=>{
    const myRef=useRef("");

    const myFun=()=>{
        myRef.current.innerHTML="WE are in class";
    }
    
    
    return(
        <>
        <h1 ref={myRef}>hellow</h1>
        <button onClick={myFun}>Click me</button>
        </>
    )
}
export default Ref;