import './App.css'
import React from "react"

import Herosection from "./components/heroSection/Herosection";
import Nav from './components/nav/Nav';



export default function App() {
 

  return (
    <div className="App">
    <Nav />
    <Herosection />

    </div>
  
  );
}


