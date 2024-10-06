import './App.css'
import React from "react"


import Herosection from "./components/Herosection";

import Not from './components/Not';
import QuemSomos from './components/QuemSomos';

import Divider from './components/Divider';
import Footer from './components/Footer/Footer';

import Autoridade from './components/Autoridade/Autoridade';

import GymPass from './components/GymPass';

import Modalidades from './components/Modalidades';
import Alunos from './components/Alunos';
import Local from './components/Local';


export default function App() {
 

  return (
    <div className="App">
    <Not />
   
    <Herosection />
  
   
   
    <Divider />
    <QuemSomos />
   
    <GymPass />
    
    <Modalidades />
    <Divider />
    <Local />
    <Divider />
    <Alunos />

    <Footer />


    </div>
  
  );
}


