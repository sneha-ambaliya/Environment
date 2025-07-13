import React from 'react'
import back_img from "../assets/plant.jpg"
import work1 from "../assets/work1.jpg"
import work2 from "../assets/work2.jpg"

function Support() {
    return (
        <>
            <section className='hero'>
                <section className="hero">
                    <div className="w-full bg-[#042311] md:px-20 text-center lg:p-40 max-sm:py-30 max-sm:px-4">
                        <h5 className="text-green-400 text-sm md:text-base">Our Services</h5>
                        <h1 className="hero-font text-white text-3xl md:text-6xl font-semibold mt-2  ">Driving Sustainable <br />Change</h1>
                        <h6 className="text-[#C4CCC7] text-sm md:text-lg mt-4">
                            Explore the eco-friendly services we offer to help protect and  <br className="hidden md:block" /> restore the environment
                        </h6>
                    </div>
                </section>
            </section>

            <div className='flex gap-7 justify-center flex-wrap'>
                <div class="w-60 h-40 bg-[#fcf7f1] rounded-sm flex flex-col items-center mt-20 justify-end relative text-center pt-16">

                    <div class="absolute -top-10">
                        <img src={back_img} class="w-30 h-30 object-cover rounded-full   shadow-md" />
                    </div>
                    <p class=" text-green-900 font-semibold text-lg mb-10 z-10">Recycle Waste</p>
                </div>
                <div class="w-60 h-40 bg-[#fcf7f1] rounded-sm flex flex-col items-center mt-20 justify-end relative text-center pt-16">

                    <div class="absolute -top-10">
                        <img src={back_img} class="w-30 h-30 object-cover rounded-full   shadow-md" />
                    </div>
                    <p class=" text-green-900 font-semibold text-lg mb-10 z-10">Recycle Waste</p>
                </div>
                <div class="w-60 h-40 bg-[#fcf7f1] rounded-sm flex flex-col items-center mt-20 justify-end relative text-center pt-16">

                    <div class="absolute -top-10">
                        <img src={back_img} class="w-30 h-30 object-cover rounded-full   shadow-md" />
                    </div>
                    <p class=" text-green-900 font-semibold text-lg mb-10 z-10">Recycle Waste</p>
                </div>
            </div>


            <section className="py-16 px-6 md:px-16 bg-white">
                <div className="max-w-7xl mx-auto  px-24 grid md:grid-cols-2 max-sm:px-2 gap-20 items-center">

                    <div className="relative flex justify-center">

                        <img
                            src={work1}
                            alt="Tree Planting"
                            className="rounded-xl w-60 h-100 md:w-72 shadow-lg"
                        />

                        <img
                            src={work2}
                            alt="Bird"
                            className="rounded-xl w-40 md:w-48 absolute -bottom-6 -right-8 border-4 border-white shadow-xl"
                        />

                    </div>

                    
                    <div>
                        <p className="text-green-600 font-semibold mb-2">🌿 Services</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">What We Do</h2>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            It is a long established fact that a reader will be distracted by the readable content.
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected.
                        </p>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            It is a long established fact that a reader will be distracted by the readable content.
                            There are many variations of passages of Lorem Ipsum available, but the majority!
                        </p>

         
                        <div className="mt-6">
                            <p className="text-green-700 font-semibold mb-3">List of Services</p>
                            <div className="w-24 h-1 bg-green-500 rounded-full mb-4" />

                            <div className="flex flex-wrap gap-3">
                                <button className="bg-[#fcf7f1] flex items-center justify-between gap-3 px-4 py-2 rounded-md text-gray-800 font-medium shadow-sm hover:shadow-md transition">
                                    Recycle Waste
                                    <span className="ml-2 text-green-700 text-xl">→</span>
                                </button>

                                <button className="bg-[#fcf7f1] flex items-center justify-between gap-3 px-4 py-2 rounded-md text-gray-800 font-medium shadow-sm hover:shadow-md transition">
                                    Recycle Waste
                                    <span className="ml-2 text-green-700 text-xl">→</span>
                                </button>

                                <button className="bg-[#fcf7f1] flex items-center justify-between gap-3 px-4 py-2 rounded-md text-gray-800 font-medium shadow-sm hover:shadow-md transition">
                                    Recycle Waste
                                    <span className="ml-2 text-green-700 text-xl">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Support