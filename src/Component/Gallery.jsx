import React from 'react'
import "../App.css"
import '../index.css';
import plant from "../assets/plant.jpg"

function Gallery() {
  return (
    <>
      <section className="hero">
        <div className="w-full bg-[#042311] md:px-20 text-center max-sm:px-4 max-sm:py-30 lg:p-40 ">
          <h5 className="text-green-400 text-sm md:text-base">Customer Gallery</h5>
          <h1 className="hero-font text-white text-3xl md:text-6xl font-semibold mt-2  ">Our Community <br />in Action</h1>
          <h6 className="text-[#C4CCC7] text-sm md:text-lg mt-4">
            Contrary to popular belief , Lorem lpsum  is not simply  <br className="hidden md:block" /> random text. it has  roots  in a piecs of classical
          </h6>
        </div>
      </section>

      <section className='Gallery'>
        <div className="p-8 bg-white text-gray-800 mt-20 place-items-center *:">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">

            <div className='w-70'>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-green-900 border-b-2 border-green-900 w-full inline-block">Gallery Product 1</h2>
                <span className="text-2xl">&rarr;</span>
              </div>
              <img src={plant} alt="Product 1" className="mb-4 w-full h-auto" />
              <h3 className="text-xl font-bold text-green-800 mb-1">Your First Title</h3>
              <div className="h-1 w-20 bg-[#4E9E8C] mb-3"></div>
              <p className="text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page.
              </p>
            </div>


            <div className='w-70'>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-green-900 border-b-2 border-green-900  w-full inline-block">Gallery Product 1</h2>
                <span className="text-2xl">&rarr;</span>
              </div>
              <img src={plant} alt="Product 2" className="mb-4 w-full h-auto" />
              <h3 className="text-xl font-bold text-green-800 mb-1">Your First Title</h3>
              <div className="h-1 w-20 bg-[#4E9E8C] mb-3"></div>
              <p className="text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page.
              </p>
            </div>


            <div className='w-70'>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-green-900 border-b-2 w-full border-green-900 inline-block">Gallery Product 1</h2>
                <span className="text-2xl">&rarr;</span>
              </div>
              <img src={plant} alt="Product 2" className="mb-4 w-full h-auto" />
              <h3 className="text-xl font-bold text-green-800 mb-1">Your First Title</h3>
              <div className="h-1 w-20 bg-[#4E9E8C] mb-3"></div>
              <p className="text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page.
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white text-gray-800 place-items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">

            <div className='w-70'>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-green-900 border-b-2 border-green-900 w-full inline-block">Gallery Product 1</h2>
                <span className="text-2xl">&rarr;</span>
              </div>
              <img src={plant} alt="Product 1" className="mb-4 w-full h-auto" />
              <h3 className="text-xl font-bold text-green-800 mb-1">Your First Title</h3>
              <div className="h-1 w-20 bg-[#4E9E8C] mb-3"></div>
              <p className="text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page.
              </p>
            </div>


            <div className='w-70'>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-green-900 border-b-2 border-green-900  w-full inline-block">Gallery Product 1</h2>
                <span className="text-2xl">&rarr;</span>
              </div>
              <img src={plant} alt="Product 2" className="mb-4 w-full h-auto" />
              <h3 className="text-xl font-bold text-green-800 mb-1">Your First Title</h3>
              <div className="h-1 w-20 bg-[#4E9E8C] mb-3"></div>
              <p className="text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page.
              </p>
            </div>


            <div className='w-70'>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-green-900 border-b-2 w-full border-green-900 inline-block">Gallery Product 1</h2>
                <span className="text-2xl">&rarr;</span>
              </div>
              <img src={plant} alt="Product 2" className="mb-4 w-full h-auto" />
              <h3 className="text-xl font-bold text-green-800 mb-1">Your First Title</h3>
              <div className="h-1 w-20 bg-[#4E9E8C] mb-3"></div>
              <p className="text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page.
              </p>
            </div>
          </div>
        </div>

      </section>

    </>

  )
}

export default Gallery