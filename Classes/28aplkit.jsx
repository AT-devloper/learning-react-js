import { add,sub } from "./28aplslice";
import { useSelector,useDispatch } from "react-redux";


const Kit=()=>{
const mct=useSelector(state=>state.mycounter.cnt)
const disp = useDispatch();
return(
    <>
    <h1> My counter app</h1>

    <button onClick={()=>{disp(add())}} >ADD 1 </button>
    <h1>{mct}</h1>
    <button onClick={()=>{disp(sub())}} >SUB 1 </button>
    </>
)}
export default Kit;