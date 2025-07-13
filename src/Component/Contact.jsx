import React from 'react'
import "../App.css"
import '../index.css';


function Contact() {
  return (
    <>
      <section className="hero">
        <div className="w-full bg-[#042311] py-16 md:px-20 text-center  max-sm:px-2 max-sm:py-30  lg:p-40">
          <h5 className="text-green-400 text-sm md:text-base">Get In Touch</h5>
          <h1 className=" hero-font font-bold text-6xl text-white  md:text-5xl  mt-2">Contact Us</h1>
          <h6 className="text-[#C4CCC7] text-sm md:text-lg mt-4">
            Have questions, ideas, or want to collaborate? We’d love to <br className="hidden md:block" /> hear from you.
          </h6>
        </div>
      </section>


      <section className='contaent'>
        <div className='flex justify-center gap-15 flex-wrap'>
          <div>
            <div class="bg-[#f7ede4] p-10 rounded-xl  w-full max-w-md mt-30">
              <h2 class="hero-font text-2xl font-bold text-center text-green-800 mb-6">Get In Touch With Us</h2>

              <form class="space-y-4">
                <div class="flex space-x-4">
                  <input type="text" placeholder="Full Name" class="w-1/2 px-4 py-2 rounded-md border-hidden bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400" />
                  <input type="email" placeholder="Email" class="w-1/2 px-4 py-2 rounded-md border-hidden bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400" />
                </div>

                <select class="w-full px-4 py-2 rounded-md border-hidden border-gray-300 text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-green-400">
                  <option>Select Subject</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>

                <textarea rows="4" placeholder="Submit your message" class="w-full px-4 py-2 bg-white rounded-md border-hidden border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>

                <button type="submit" class="w-full bg-[#4E9E8C] text-white py-2 px-4 rounded-md font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="bg-white p-6 md:p-10 max-w-5xl mx-auto mt-20">
              <h2 className=" hero-font text-2xl md:text-3xl font-semibold text-green-800 mb-2">Contact Details</h2>
              <p className="text-gray-500 mb-8">
                It is a long established fact that a reader will be distracted by the readable content.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

                <div className="flex items-center bg-white border rounded-xl shadow-sm p-4">
                  <div className="bg-[#4E9E8C] text-white  p-4 rounded-md">
                    <span class="material-symbols-outlined">
                      call
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-[#123524]">Mobile</h4>
                    <p className="text-sm text-gray-600">+91 98745 63210</p>
                  </div>
                </div>


                <div className="flex items-center bg-white border rounded-xl shadow-sm p-4">
                  <div className="bg-[#4E9E8C] text-white p-4 rounded-md">
                    <span class="material-symbols-outlined">
                      mail
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-[#123524]">Email</h4>
                    <p className="text-sm text-gray-600">contact@gmail.com</p>
                  </div>
                </div>


                <div className="flex items-center bg-white border rounded-xl shadow-sm p-4">
                  <div className="bg-[#4E9E8C] text-white p-4 rounded-md">
                    <span class="material-symbols-outlined">
                      schedule
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-[#123524]">Availability</h4>
                    <p className="text-sm text-gray-600">Daily 09am – 07pm</p>
                  </div>
                </div>


                <div className="flex items-center bg-white border rounded-xl shadow-sm p-4">
                  <div className="bg-[#4E9E8C] text-white p-4  rounded-md">
                    <span class="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-[#123524]">Address</h4>
                    <p className="text-sm text-gray-600">Flamingo Squ, Hyderabad.</p>
                  </div>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <p className="font-medium text-[#123524]">Social Media :</p>
                <div className="flex gap-4 text-xl text-black">
                  {/* icon*/}
                  {/* icon */}
                  {/* icon */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Contact