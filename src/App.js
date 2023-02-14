import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "./Components/About/AboutUs";
import Mission from "./Components/About/Mission";
import Activities from "./Components/Activities/Activities";
import ScrollToTop from "./Components/Config/ScrollToTop";
import FaithCorner from "./Components/FaithCorner.js/FaithCorner";
import HopeArticle from "./Components/FaithCorner.js/HopeArticle";
import About from "./Components/Home/About";
import Header1 from "./Components/Home/Header1";
// import Header from "./Components/Header";

import Home from "./Components/Home/Home";
import Services from "./Components/Home/Services";
import Support from "./Components/Home/Support";
import Works from "./Components/Home/Works";


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Header1/>
      
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        {/* <Route path="/activities" element={<Services/>} /> */}
        {/* <Route path="/faith" element={<Works/>} /> */}
        <Route path="/support" element={<Support/>} />
        {/* <Route path="/mission" element={<AboutUs/>} /> */}
        <Route path="/activities" element={<Activities/>} />
        <Route path="/faith" element={<FaithCorner/>} />
        <Route path="/article/Hope" element={<HopeArticle/>} />
        
      </Routes>

    </BrowserRouter>
  );
};

export default App;
