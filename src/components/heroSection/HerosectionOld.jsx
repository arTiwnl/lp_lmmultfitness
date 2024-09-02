import React from "react";

export default function Herosection(){
    return(

     

      <section className="backdrop-blur-sm  text-white   bg-cover	bg-no-repeat bg-[url('https://lh3.googleusercontent.com/p/AF1QipOrPK8Ur4JI38ONjyqH8GI_Vqewfy7uN9D2KFTG=s680-w680-h510')]" >
      
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-yellow-200  via-yellow-500 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
           Lm Multfitness
    
        
          </h1>
    
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
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