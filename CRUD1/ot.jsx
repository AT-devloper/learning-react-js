import { BrowserRouter,Routes,Route } from "react-router-dom";
import Ly from "./ly";
import Hm from "./hm";
import Ins from "./ins";
import Dplay from "./dplay";
import Search from "./search";



const Ot=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Ly />}>
            <Route index element={<Hm  />} />
            <Route path="home" element={<Hm />} />
            <Route path="Insert" element={<Ins />} />
            <Route path="display" element={<Dplay />} />
            <Route path="Search" element={<Search />} />

            </Route>
        </Routes>
        </BrowserRouter>
        
        </>
    )
}

export default Ot;