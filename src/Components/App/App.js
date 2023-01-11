import "./App.css";
import { Route, NavLink, Routes } from "react-router-dom";
import Splash from "../Splash/Splash";
import Home from "../Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
