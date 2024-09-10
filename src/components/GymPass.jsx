import GympassLogo from '../assets/images/gympass-white.png';
import TotalPassLogo from '../assets/images/totalpass-white.png';

export default function GymPass (){ 

    return (

      

<section className=" bg-yellow-400 text-white">
  <div className="mx-auto max-w-screen-xl px-8 py-8  sm:py-12 lg:px-40 lg:py-8">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-">
      <div className="mx-auto max-w-lg ltr:sm:text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className=" text-gray-900 text-2xl font-bold sm:text-4xl">Somos Parceiros</h2>

       

       
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">

      <a
          className="opacity-85 block rounded-xl border border-gray-900 p-4 shadow-sm hover:border-gray-500 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
              <img className="" src="https://raw.githubusercontent.com/arTiwnl/lp_lmmultfitness/main/src/assets/images/gympass-white.png" alt="Gympass Logo" />
        </a>

        <a
          className="opacity-85 block rounded-xl border border-gray-900 p-4 shadow-sm hover:border-gray-500 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
              <img className="" src="https://raw.githubusercontent.com/arTiwnl/lp_lmmultfitness/main/src/assets/images/totalpass-white.png" alt="TotalPass Logo" />
        </a>

       
      </div>
    </div>
  </div>
</section>

    )
}