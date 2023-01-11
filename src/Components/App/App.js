import "./App.css";
import { Route, NavLink, Routes } from "react-router-dom";
import Splash from "../Splash/Splash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
      </Routes>
    </div>
  );
}

export default App;
