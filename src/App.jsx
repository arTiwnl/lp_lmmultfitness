import './App.css'
import React from "react"


import Herosection from "./components/heroSection/Herosection";
import Nav from './components/nav/Nav';
import Not from './components/Not';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Modalidades from './components/Modalidades/Modalidades';
import Divider from './components/Divider';
import Footer from './components/Footer/Footer';

export default function App() {
 

  return (
    <div className="App">
    <Not />
    <Nav />
    <Herosection />
    <Modalidades />
    <Divider />
    <QuemSomos />
    <Divider />



    <Footer />


    </div>
  
  );
}


