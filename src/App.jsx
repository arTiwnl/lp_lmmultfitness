import './App.css'
import React from "react"


import Herosection from "./components/heroSection/Herosection";

import Not from './components/Not';
import QuemSomos from './components/QuemSomos/QuemSomos';

import Divider from './components/Divider';
import Footer from './components/Footer/Footer';

import Autoridade from './components/Autoridade/Autoridade';

import GymPass from './components/GymPass';

import Modalidades from './components/Modalidades/Modalidades';
import Herosection2 from './components/heroSection/Herosection';

export default function App() {
 

  return (
    <div className="App">
    <Not />
   
    <Herosection />
  
    <Autoridade />
   
    <Divider />
    <QuemSomos />
   
    <GymPass />
    
    <Modalidades />

    <Footer />


    </div>
  
  );
}


