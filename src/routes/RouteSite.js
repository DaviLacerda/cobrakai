import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Home from "../pages/Home/Home";
import Characters from "../pages/Characters/Characters";
import About from "../pages/About/About";

function RouteSite() {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<Home/>}></Route>
                <Route path='/characters' element={<Characters/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </Router>
    )
}

export default RouteSite;