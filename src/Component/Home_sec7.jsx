import React from 'react'

function Home_sec7() {
   return (
      <section className='air'>
         <div className='mt-20 flex justify-center max-sm:flex-wrap max-sm:px-10 gap-10 '>
            <div>
               <h5 className='text-green-400'>Refined Air</h5>
               <br />
               <h1 className='text-green-900 text-4xl font-bold'>Industrial Air Usage</h1>
               <div className='p-15 bg-white shadow-xl/20 mt-20 rounded-2xl'>
                  <h1 className='font-bold text-6xl text-green-900 '>3800 psi</h1><br />
                  <h1 className='text-xl text-center'>How much air<br />to be refined</h1>
               </div>
            </div>
            <div className='p-15 bg-white shadow-xl/20 mt-20 rounded-2xl h-60 max-sm:h-auto'>
               <h1 className='font-bold text-6xl text-green-900 '>3800 psi</h1><br />
               <h1 className='text-xl text-center'>How much air<br />to be refined</h1>
            </div>
         </div>
      </section>
   )
}

export default Home_sec7