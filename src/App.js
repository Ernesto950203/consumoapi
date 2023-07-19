import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Sname from "./pages/Sname";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Navigate to={"/home"} />}></Route>
        <Route path="/Sname" element={<Sname />}></Route>
        <Route path="/Details" element={<Details/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
