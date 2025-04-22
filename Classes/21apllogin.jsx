import Auth from "../login/logout";
import Unauth from "../login/unAuth";
import { useContext } from "react";
import { myContext } from "../login/logincon";

const Lo=()=>{
    const {user}= useContext(myContext)
    return(
        <>
        <h1>LOGIN SYSTEM</h1>
        {user.auth ? <Auth/> :<Unauth/>}
        </>
    )
}
export default Lo;