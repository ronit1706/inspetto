import './App.css'
import {Route, Routes} from "react-router-dom";
import About from "./pages/About.jsx";
import Team from "./pages/Team.jsx";
import Prediction from "./pages/Prediction.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

    return(
        <div className="h-screen overflow-hidden ">

            <Navbar/>

            <Routes>
                <Route path="/" element={<About/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/team" element={<Team/>}></Route>
                <Route path="/prediction" element={<Prediction />}></Route>
            </Routes>
        </div>
    )
}

export default App
