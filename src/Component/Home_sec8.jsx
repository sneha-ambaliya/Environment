import React from 'react'
import bottle from "../assets/bottle.jpg"

function Home_sec8() {
  return (
    <section className='last-con'>
      <div className="relative h-110 flex items-center justify-center text-center text-white mt-20">

        <img
          src={bottle}
          alt="Background"
          className="absolute inset-0 w-full  object-cover "
        />


        <div className="absolute inset-0 bg-[#1C503B] opacity-95"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold mb-4">Ready to Make a Change?</h1>
          <p className="mb-6">
            Take the First Step Today. There are many variations of passages of Lorem Ipsum available, but the majority...
          </p>
          <button className="bg-white text-green-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-200">
            Join Us
          </button>
        </div>
      </div>


    </section>
  )
}

export default Home_sec8