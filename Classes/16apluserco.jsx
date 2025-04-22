import { myContext } from "./usercontext";
import { useContext } from "react";
const Cont=()=>{
    const{name} = useContext(myContext);
    return(
        <>
        <h1>Welcomes You {name} !!.... </h1>
        </>

    )
}
export default Cont;