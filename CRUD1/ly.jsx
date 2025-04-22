import { Link,Outlet } from "react-router-dom";


const Ly=()=>{
    return(
        <>
        <h2>

        <Link to="home"> HOME |</Link>
        <Link to ="insert">| INSERT |</Link>
        <Link to ="display">| DISPLAY |</Link>
        <Link to ="search">| SEARCH </Link>

        </h2>

        <hr/>
        <Outlet/>
        <hr/>

        <br/>
        WWW.MY_WEB_APP.COM
        
        </>
    )
}

export default Ly;