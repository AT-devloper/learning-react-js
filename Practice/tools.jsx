import { useSelector,useDispatch } from "react-redux";
import { changeColor } from "./color";


const Tools=()=>{
        const Clr=useSelector(state=>state.Mecolor.color);
        const dis=useDispatch();
    return(
        <>
     <h1> Click On Color</h1>
     <button onClick={()=>{dis(changeColor())}}>Red</button>
     <br/> <br/>
    <div style={{width:"300px", height:"250px",background:Clr}}></div>
        </>
    )
}

export default Tools;