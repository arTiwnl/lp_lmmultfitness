import GympassLogo from '../assets/images/gympass.svg';

export default function GymPass (){ 

    return (

      

<section className="bg-yellow-400 text-white">
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-40 lg:py-8">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg ltr:sm:text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-3xl font-bold sm:text-4xl">Aceitamos Gympass e Totalpass</h2>

       

        <a
          href="#"
          className="mt-8 inline-block rounded bg-yellow-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">

      <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
              <img className="my-auto mx-auto" src={GympassLogo} alt="GympassLogo" />
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
              <img className="my-auto mx-auto" src={GympassLogo} alt="GympassLogo" />
        </a>

       
      </div>
    </div>
  </div>
</section>

    )
}