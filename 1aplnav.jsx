// LAYOUT PAGE
import { Link,Outlet } from "react-router-dom";

const Layout =()=>{
    return(
        <>
            <h3>
                <Link to ="Home">| Home </Link> |
                <Link to="About">| About </Link> |
                <Link to ="Contact">| Contact Us</Link> |
            </h3> 
            <hr size="1" color="green"/>
                 <Outlet  />
            <hr size="1" color="green"/>
                <h5> WWW.WEBSITE.COM <br /> COPY RIGHT </h5>
        </>
    )
}

export default Layout;





