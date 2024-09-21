import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/Sign Up/SignUp.jsx";
import DogFood from "./components/DogFood/DogFood.jsx";
import Consultancy from "./components/Consultancy/Consultancy.jsx";
import OnlineConsultancy from "./components/Online Consultancy/OnlineConsultancy.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SIgnin" element={<SignUp />} />
        <Route path="/dog" element={<DogFood />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/online" element={<OnlineConsultancy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

