import Disp from "./disp";
import Home1 from "./home1";
import Insert from "./insert";
import Layo from "./layo";

import { BrowserRouter,Routes,Route } from "react-router-dom";


const Out=()=>{

    return(
        <>
        <br/>
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<Layo/>}>
                    <Route index element={<Home1/>}/>
                    <Route path="home" element={<Home1/>} />
                    <Route path="insert" element={<Insert/>}  />
                    <Route path="display" element={<Disp />}  />               
                </Route>        
            </Routes>
        </BrowserRouter>
        </>
    )


}
export default Out;