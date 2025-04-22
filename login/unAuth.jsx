import { useContext, useState } from "react";
import { myContext } from "./logincon";

const Unauth=()=>{
    const [txtval,setTextVal] = useState("");
    const {login} = useContext(myContext);

    return(
        <>
        Enter name :<input type="text" value={txtval} onChange={(e)=>
            {setTextVal(e.target.value)}} />

        <button onClick={()=>{login(txtval)}}> LOGIN </button>
        </>
    )

}
export default Unauth;