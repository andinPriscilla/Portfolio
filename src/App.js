// import logo from './logo.svg';

// import { createContext, useEffect, useState } from "react";
import { BrowserRouter,  Routes, Route} from "react-router-dom";

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';



import './App.css';
import BackgroungImage from "./components/BackgroungImage/BackgroundImage";



function App () {
return (  
  <BrowserRouter>
      <BackgroungImage />
      <Navigation />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/about" element = {<About/>} />
      </Routes>
      <Footer /> 
  </BrowserRouter>
);
   
}


export default App;