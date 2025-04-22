import { useRef } from "react";


const Ref2=()=>{
    const myRef2=useRef("");

    const display=()=>{
        myRef2.current.innerHTML="we learn react js";
        myref2.current.style.color="red";
    }

    const back=()=>{
        myRef2.current.style.border ="200px";
        myRef2.current.style.borderRadius="50%";


    }
    return(
        <>
        <h1  ref={myRef2} >Hellow </h1>

        <button onClick={display}>Click</button>
        <button onClick={back}>Click</button>
        </>
    )
}
export default Ref2;