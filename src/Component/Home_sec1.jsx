import React from 'react';
import s1 from "../assets/s1.jpg"


function Home_sec1() {
  return (
    <>

      <div className="w-full p-3 bg-[#27b0a7]">
        <ul className="flex flex-wrap justify-center md:justify-evenly text-white font-bold text-sm md:text-xl gap-4">
          <li>Environment</li>
          <li>Renewable Energy</li>
          <li>Ocean Recycling</li>
        </ul>
      </div>


      <div className="flex flex-col-reverse md:flex-row items-center py-4   md:py-20 gap-10 md:gap-20 justify-center bg-[#F6F4EB]">
        <div className=" bg-cover bg-center h-90  w-80 max-sm:w-70 rounded-lg"style={{ backgroundImage: `url(${s1})` }}></div>
        <div className="max-w-lg px-4">
          <h5 className="text-green-600 text-sm md:text-base uppercase">Who we are</h5>
          <h1 className="text-xl md:text-2xl font-bold text-[#064B1E]">
            Environmental Sustainable Forever Green Future
          </h1>

          <div className="mt-6 space-y-4">

            <div className="flex items-start gap-3">
              <div className="text-2xl">🌍</div>
              <div>
                <h1 className="font-bold text-[#0c918d]">Safe Environment</h1>
                <p className="text-xs">It is a long established fact that a reader will be distracted by readable content.</p>
              </div>
            </div>


            <div className="flex items-start gap-3">
              <div className="text-2xl">🌍</div>
              <div>
                <h1 className="font-bold text-[#0c918d]">Clean Energy</h1>
                <p className="text-xs">It is a long established fact that a reader will be distracted by readable content.</p>
              </div>
            </div>


            <button className="mt-4 bg-[#27b0a7] text-white px-6 py-2 rounded-lg hover:bg-transparent hover:text-green-500 hover:border-green-500 border transition duration-300">
              About More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_sec1;
