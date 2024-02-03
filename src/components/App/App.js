import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Gallary from "../Gallary/Gallary";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app__page">
      <Header />
      <Routes>
        <Route path="/images" element={<Gallary />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
