import bg from './../assets/images/BG.jpg';

import React from "react";

export default function Herosection(){
    return(

     
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url("https://raw.githubusercontent.com/arTiwnl/lp_lmmultfitness/main/src/assets/images/BG.jpg")` }}></div>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-yellow-200  via-yellow-400 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
           Lm Multfitness
    
        
          </h1>
    
          <p className="mx-auto mt-4 max-w-xl text-white sm:text-xl/relaxed">
          Descubra o Melhor do Fitness e Bem-Estar!
          </p>
    
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-yellow-500 bg-yellow-400  px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>
    
            <a
              className="block w-full rounded border border-yellow-400  px-12 py-3 text-sm font-medium text-white hover:bg-yellow-400  hover:text-black  focus:outline-none focus:ring active:bg-yellow-400  sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

    )
}