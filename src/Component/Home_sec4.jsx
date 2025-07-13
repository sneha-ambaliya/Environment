import React from 'react'

function Home_sec4() {
  return (
    <section className="bg-[#114b3f] text-white py-16 h-100 relative ">
      <div className="text-center mb-10 h-0 pt-10 ">
        <h3 className="text-green-400 font-medium">Refined Water</h3>
        <h1 className="text-5xl font-bold mt-2">Industrial Water Usage</h1>
      </div>

      <div className="bg-white text-[#114b3f] shadow-xl rounded-2xl max-sm:mx-10 max-sm:py-4 max-sm:px-4 md:mx-40 p-20 flex md:flex-row items-center justify-center gap-10 relative top-30 bottom-0 left-0  h-auto">
      
        <div className="text-center">
          <h2 className="text-6xl font-bold max-sm:text-4xl">3800 L</h2>
          <p className="mt-2 text-black font-bold max-sm:text-sm ">How much water<br />to be refined</p>
        </div>

        
        <div className="w-[1px] h-16 bg-[#cce3de] hidden md:block" />

      
        <div className="text-center">
          <h2 className="text-6xl font-bold  max-sm:text-4xl">8200 L</h2>
          <p className="mt-2 text-black font-bold max-sm:text-sm">how much we<br />refined water</p>
        </div>
      </div>
    </section>
  )
}

export default Home_sec4