import React from 'react'
import glass1 from "../assets/glass.jpg"
import glass from "../assets/glass2.jpg"

function Home_sec9() {
  return (
    <section className="py-16  px-30  max-sm:px-2 relative mt-20">
      <div className="text-left mb-12 px-4 md:px-8 lg:ml-20 lg:mx-24">
        <p className="text-green-500 font-medium flex items-center justify-start gap-2">
          <span className="text-lg">🌿</span> Testimonial
        </p>
        <h2 className="text-3xl font-bold text-green-900 mt-2">Impact That Matters</h2>
        <p className="text-gray-500 mt-1">Hear from Those Making a Difference</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:gap-0 gap-20 items-center  px-4 md:px-8 lg:px-20">
        <div className="relative flex justify-center md:justify-start">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-60 md:h-80 lg:w-72 lg:h-96 rounded-xl overflow-hidden shadow-md">
            <img src={glass1} alt="Farming" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-16 sm:-bottom-10 md:-bottom-6 left-1/2 md:left-40 transform -translate-x-1/2 md:translate-x-0 w-44 h-44 sm:w-52 sm:h-52 md:w-44 md:h-44 lg:w-65 lg:h-56 border-6 border-white bg-white overflow-hidden">
            <img src={glass} alt="Bird" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="text-center  md:text-left w-full">
          <div className="text-green-950 text-6xl text-center mt-6 md:mt-10 mb-2x">
            &#10077;
          </div>
          <p className="text-gray-600 text-center text-md mb-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <img
              src={glass1}
              alt="Robert Walls"
              className="rounded-full w-10 h-10 object-cover"
            />
            <div>
              <p className="text-gray-800 font-bold">Robert Walls</p>
              <p className="text-gray-500 text-sm">Project Manager At FIngios</p>
            </div>
          </div>

          <div className="mt-6 flex text-center justify-center  gap-6">
            <div className="flex gap-2 ">
              <span className="w-3 h-3 rounded-full bg-green-600 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home_sec9