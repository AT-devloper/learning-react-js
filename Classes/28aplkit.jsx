import { useSelector,useDispatch } from "react-redux";
import { add,sub } from "./28aplslice";





const Kit=()=>{
    const mycnt= useSelector(state=>state.mycounter.count)
const dispatch = useDispatch();
return(
    <>
    <h1> My counter app</h1>

    <button onClick={()=>{dispatch(add())}} >ADD 1 </button>

    <h1>{mycnt}</h1>

    <button onClick={()=>{dispatch(sub())}} >SUB 1 </button>

    
    </>
)}

export default Kit;