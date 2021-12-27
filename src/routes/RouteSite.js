import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Home from "../pages/Home/Home";

function RouteSite() {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<Home/>}></Route>
                <Route path='/characters'></Route>
                <Route path='/about'></Route>
            </Routes>
        </Router>
    )
}

export default RouteSite;