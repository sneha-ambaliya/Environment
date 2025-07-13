import React from 'react'


import Image1 from "../assets/recycle.jpg"

function Home_sec6() {
  return (
    <section className='Action'>
      <div className='w-full py-20 bg-[#FDFAF4] mt-30'>
         <div>
            <h5 className='text-center text-green-400'>Save Enviroment</h5><br/>
            <h1 className='text-4xl font-bold text-[#064B1E] font-20 text-center'>Simple Action to Protect<br/>the Environment </h1><br/><br/>
         </div>
         <div class="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-0 px-30 md:px-10  place-items-center">
            <div className='w-72 grid place-items-center p-6 hover:bg-white rounded-2xl hover:shadow-lg'>
                <div class="bg-cover h-20 w-20 rounded-full" style={{backgroundImage:`url(${Image1})`}}></div>
                <br/>
                <h1 className='text-bold text-[#163A19] '>Embrace the Three Rs</h1>
                <br/>
                <p className='text-xs'>Reducing the amount of waste we produce helps lower pollution and saves natural resources. Reusing items gives them a second life and cuts down on the need for new materials.</p>
            </div>
            <div className='w-72 grid place-items-center p-6 hover:bg-white rounded-2xl hover:shadow-lg'>
                <div class=" bg-cover h-20 w-20 rounded-full   " style={{backgroundImage:`url(${Image1})`}}></div>
                <br/>
                <h1 className='text-bold text-[#163A19] '>Embrace the Three Rs</h1>
                <br/>
                <p className='text-xs'>Reducing the amount of waste we produce helps lower pollution and saves natural resources. Reusing items gives them a second life and cuts down on the need for new materials.</p>
            </div>
            <div className='w-72 grid place-items-center p-6 hover:bg-white rounded-2xl hover:shadow-lg'>
                <div class=" bg-cover h-20 w-20 rounded-full   " style={{backgroundImage:`url(${Image1})`}}></div>
                <br/>
                <h1 className='text-bold text-[#163A19] '>Embrace the Three Rs</h1>
                <br/>
                <p className='text-xs'>Reducing the amount of waste we produce helps lower pollution and saves natural resources. Reusing items gives them a second life and cuts down on the need for new materials.</p>
            </div>
            <div className='w-72 grid place-items-center p-6 hover:bg-white rounded-2xl hover:shadow-lg'>
                <div class=" bg-cover h-20 w-20 rounded-full   " style={{backgroundImage:`url(${Image1})`}}></div>
                <br/>
                <h1 className='text-bold text-[#163A19] '>Embrace the Three Rs</h1>
                <br/>
                <p className='text-xs'>Reducing the amount of waste we produce helps lower pollution and saves natural resources. Reusing items gives them a second life and cuts down on the need for new materials.</p>
            </div>
            <div className='w-72 grid place-items-center p-6 hover:bg-white rounded-2xl hover:shadow-lg'>
                <div class=" bg-cover h-20 w-20 rounded-full   " style={{backgroundImage:`url(${Image1})`}}></div>
                <br/>
                <h1 className='text-bold text-[#163A19] '>Embrace the Three Rs</h1>
                <br/>
                <p className='text-xs'>Reducing the amount of waste we produce helps lower pollution and saves natural resources. Reusing items gives them a second life and cuts down on the need for new materials.</p>
            </div>
            <div className='w-72 grid place-items-center p-6 hover:bg-white rounded-2xl hover:shadow-lg'>
                <div class="bg-cover h-20 w-20 rounded-full   " style={{backgroundImage:`url(${Image1})`}}></div>
                <br/>
                <h1 className='text-bold text-[#163A19] '>Embrace the Three Rs</h1>
                <br/>
                <p className='text-xs'>Reducing the amount of waste we produce helps lower pollution and saves natural resources. Reusing items gives them a second life and cuts down on the need for new materials.</p>
            </div>
            
         </div>
      </div>
    </section>
  )
}

export default Home_sec6