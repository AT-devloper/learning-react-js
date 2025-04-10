import {BrowserRouter,Routes,Route} from "react-router-dom";

import Layout from "./1aplnav";
import Home from "./Pages/Hom";
import About from "./pages/About";
import Cont from "./pages/Contact";


const Lay=()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route  index element={<Home />}/>

                    <Route path="Home" element={<Home/>}/>
                    <Route path="About" element={<About/>}/>
                    <Route path="Contact" element={<Cont/>}/>
                    
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default Lay;