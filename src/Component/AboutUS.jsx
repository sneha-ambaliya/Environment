import React from 'react'
import "../App.css"
import '../index.css';
import story from "../assets/story.webp"
import work1 from "../assets/work1.jpg"
import work2 from "../assets/work2.jpg"
import work3 from "../assets/work3.jpg"
import back_img from "../assets/plant_back_img.jpg"
import recycle from "../assets/recycle.jpg"

const AboutUS = () => {
  return (
    <>
      <section className="hero">
        <div className="w-full bg-[#042311] max-sm:py-30 max-sm:px-4 text-center lg:p-40">
          <h5 className="text-green-400 text-sm md:text-base">About Us</h5>
          <h1 className="hero-font text-white text-3xl md:text-6xl font-semibold mt-2  ">Committed <br />To a Greener Future</h1>
          <h6 className="text-[#C4CCC7] text-sm md:text-lg mt-4">
            Contrary to popular belief, Lorem lpsum is not simply  <br className="hidden md:block" /> rendom text.it has roots in apiece of classical
          </h6>
        </div>
      </section>

      <section className="bg-[#fdf9f6] py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-30 items-center">
        
          <div>
            <p className="text-green-600 font-semibold flex items-center gap-2">
              <span className="text-xl">🌿</span> Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 leading-tight">
              Our Journey Towards a <br /> Sustainable Future
            </h2>
            <p className="text-gray-600 mt-4 text-sm  leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.
            </p>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content.
              There are many variations of passages of Lorem Ipsum available, but the majority!
            </p>
            <h3 className="text-xl font-bold text-green-800 mt-2 mb-1">Our Commitment</h3>
            <div className="h-1 w-20 bg-green-500 mb-3"></div>

        
            <div className="grid grid-cols-2 mt-6 gap-y-3 text-sm text-gray-700 font-medium">
              <ul className="space-y-2 list-disc list-inside text-green-600">
                <li>Main Commitment 1</li>
                <li>Ocean Recycling</li>
                <li>Clean Environment</li>
                <li>Clean And Pure Water</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside text-green-600">
                <li>Main Commitment 1</li>
                <li>Ocean Recycling</li>
                <li>Clean Environment</li>
                <li>Clean And Pure Water</li>
              </ul>
            </div>
          </div>

        
          <div className="relative">
            <div className='h-100 w-80 max-sm:w-70'>
              <img
                src={story} 
                alt="Soil in hands"
                className="rounded-xl object-cover w-full h-full shadow-lg"
              />
            </div>
            <div className="absolute bottom-4 right-60 w-50 bg-green-700 text-white px-6  py-3 border-2 rounded-md text-sm font-semibold shadow-md">
              🏆 AWARD WINNING
            </div>
          </div>
        </div>
      </section>

      <section className='our_work'>
        <h5 className='text-green-600 text-center mt-20 font-normal'>Why choose Us?</h5>
        <h1 className='text-green-950 text-center font-bold text-3xl mb-20'>Why Our Work Matters</h1>

        <div class="grid grid-cols-2 gap-6 max-sm:grid-cols-1  place-content-center mx-40 max-sm:mx-5">
          <div className='h-80 w-full'>
            <img src={work1} className="rounded-xl object-cover w-full h-full shadow-lg" />
          </div>

          <div className=' h-80 w-full'>
            <div className='flex gap-5'>
              <div class=" bg-cover h-18 w-18 rounded-full " style={{ backgroundImage: `url(${recycle})` }}></div>
              <div>
                <h1 className='font-bold text-green-950 align-left mt-2 text-xl'>Commitment to<br /> Sustainability</h1>
              </div>

            </div>
            <div>
              <h1 className='text-sm text-gray-600 mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque cupiditate repellendus distinctio velit, similique sapiente minima vel, voluptatum recusandae officiis. Quis atque nostrum amet aliquid excepturi voluptas, incidunt eius.</h1>
              <h1 className='text-sm text-gray-600 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque cupiditate repellendus distinctio velit, similique sapiente minima vel, voluptatum recusandae officiis. Quis atque nostrum amet aliquid excepturi voluptas, incidunt eius.</h1>
            </div>
          </div>
        </div>


        <div class="grid grid-cols-2 gap-6 max-sm:grid-cols-1  place-content-center mx-40 max-sm:mx-5 my-20">


          <div className=' h-80 w-full'>
            <div className='flex gap-5'>
              <div class=" bg-cover h-18 w-18 rounded-full" style={{ backgroundImage: `url(${recycle})` }} ></div>
              <div>
                <h1 className='font-bold text-green-950 align-left mt-2 text-xl'>Commitment to<br /> Sustainability</h1>
              </div>

            </div>
            <div>
              <h1 className='text-sm text-gray-600 mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque cupiditate repellendus distinctio velit, similique sapiente minima vel, voluptatum recusandae officiis. Quis atque nostrum amet aliquid excepturi voluptas, incidunt eius.</h1>
              <h1 className='text-sm text-gray-600 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque cupiditate repellendus distinctio velit, similique sapiente minima vel, voluptatum recusandae officiis. Quis atque nostrum amet aliquid excepturi voluptas, incidunt eius.</h1>
            </div>
          </div>
          <div className='h-80 w-full'>
            <img src={work2} className="rounded-xl object-cover w-full h-full shadow-lg" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6 max-sm:grid-cols-1  place-content-center mx-40 max-sm:mx-5 mb-20">
          <div className='h-80 w-full'>
            <img src={work3} className="rounded-xl object-cover w-full h-full shadow-lg" />
          </div>

          <div className=' h-80 w-full'>
            <div className='flex gap-5'>
              <div class=" bg-cover h-18 w-18 rounded-full" style={{ backgroundImage: `url(${recycle})` }}></div>
              <div>
                <h1 className='font-bold text-green-950 align-left mt-2 text-xl'>Commitment to<br /> Sustainability</h1>
              </div>

            </div>
            <div>
              <h1 className='text-sm text-gray-600 mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque cupiditate repellendus distinctio velit, similique sapiente minima vel, voluptatum recusandae officiis. Quis atque nostrum amet aliquid excepturi voluptas, incidunt eius.</h1>
              <h1 className='text-sm text-gray-600 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque cupiditate repellendus distinctio velit, similique sapiente minima vel, voluptatum recusandae officiis. Quis atque nostrum amet aliquid excepturi voluptas, incidunt eius.</h1>
            </div>
          </div>
        </div>

      </section>

      <section className='last-con'>
        <div className="relative h-110 flex items-center justify-center text-center text-white mt-20">

          <img
            src={back_img}
            alt="Background"
            className="absolute inset-0 w-full h-110 object-cover opacity-50"
          />


          <div className="absolute inset-0 bg-green-950 opacity-85"></div>

          <div className="relative z-10 px-4">
            <h1 className=" hero-font text-4xl font-bold mb-4">Join Us in Making a Difference</h1>
            <p className="mb-6">
              Take the First Step Today. There are many variations of passages<br /> of Lorem Ipsum available, but the majority...
            </p>
            <button className="bg-white text-green-900 font-semibold px-6 py-2 rounded-xl hover:bg-gray-200">
              partner with us
            </button>
          </div>
        </div>


      </section>
    </>
  )
}

export default AboutUS