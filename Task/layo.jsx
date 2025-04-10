import { Link,Outlet } from "react-router-dom";

const Layo=()=>{
    return(
        <>

        <h2>
            <Link to="home"> Home </Link> |
            <Link to="insert"> Insert </Link> |
            <Link to="display"> Display </Link> 
        </h2>
        <br/>

       <hr/>
       <Outlet />
       <hr/>
       <br/><br/>
<div class="bot">
      WWW.DataApp.Com<br/>
      CopyRight Content
       </div>   
        </>
    )

}
export default Layo;