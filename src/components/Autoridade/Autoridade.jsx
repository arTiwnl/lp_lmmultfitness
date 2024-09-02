
export default function Autoridade(){


    return(

        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        
      
        <dl
          className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-3"
        >
          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">Alunos Ativos</dt>
      
            <dd className="text-4xl font-extrabold text-yellow-500 md:text-5xl">+ 100</dd>
          </div>
      
          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>
      
            <dd className="text-4xl font-extrabold text-yellow-500 md:text-5xl">24</dd>
          </div>
      
          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>
      
            <dd className="text-4xl font-extrabold text-yellow-500 md:text-5xl">86</dd>
          </div>
      
          
        </dl>
      </div>

    )
}