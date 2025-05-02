import { useState  } from "react";
import { changColor } from "./colorsli";
import { useDispatch,useSelector } from "react-redux";


const Paylo=()=>{
     const Clr=useSelector(state=>state.mycolor.color);
        const dis=useDispatch();
        const [txt ,setTxt]=useState("")
        return(
            <>
            <h2 align="center">
         <h1> Click On Color</h1>

         Entercolor:<input type="text" value={txt} 
         onChange={(e)=>{setTxt(e.target.value)}} />
         <button onClick={()=>{dis(changColor(txt))}}>Change</button>
         <br/><hr /><br/>
        <div style={{width:"300px", height:"250px",background:Clr,alignContent:"center"}}></div>
        </h2>
            </>
        )
}
export default Paylo;

