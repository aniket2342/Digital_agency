import React from 'react'
import img1 from '../assets/about.png'
import img2 from '../assets/img4.jpeg'
import img3 from '../assets/bussiness.jpg';
function About() {
    return (
        <>
            <section className="text-black body-font">
  <div className="container px-5 py-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* First Column: Responsive Image */}
    <div className="relative">
      <img className="w-full h-full object-cover object-center" src={img1} alt="Responsive Image" />
    </div>

    {/* Second Column: Header Texts */}
    <div className="flex flex-col justify-center">
      <p className="text-lg text-black">SINCE 1990</p>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-black mb-4">
        The Right Place For Your <span className="text-blue-600">Digital</span> Business
      </h1>
      <p className="sm:text-xl text-base font-medium text-black mb-4">
        Dynamically promote economically sound experiences. Proactively enable process services.
      </p>
      <p className="sm:text-xl text-base text-gray-600 mb-4 text-justify">
        Proactively enable process-centric services rather than B2B scenarios to syndicate future-proof outside thinking.
      </p>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-blue-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <p className="text-black font-bold text-lg ml-2">Free IT Consulting Services</p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-blue-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <p className="text-black font-bold text-lg ml-2">Lifetime Dedicated Support</p>
        </div>
      </div>

      {/* CEO and Button */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 items-center">
        <div className="flex items-center">
          <img src={img2} className="w-16 h-16 rounded-full" alt="CEO" />
          <p className="ml-4 text-black">David Alexon, CEO & Founder</p>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
          Discover More
        </button>
      </div>
    </div>
  </div>
</section>

<div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}>
  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
    {/* First Column */}
    <div className="bg-black bg-opacity-70 flex flex-col justify-center p-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-20 h-20 text-blue-600 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Build a Business Website</h1>
      <p className="text-white text-base md:text-lg mb-4 text-justify">
        Dynamically promote economically sound experiences while proactively enabling process-centric services.
      </p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-full w-24">Button</button>
    </div>

    {/* Second Column */}
    <div className="bg-blue-600 bg-opacity-80 flex flex-col justify-center p-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-20 h-20 text-orange-400 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
        />
      </svg>
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Search Engine Optimize</h1>
      <p className="text-white text-base md:text-lg mb-4 text-justify">
        Dynamically promote economically sound experiences while proactively enabling process-centric services.
      </p>
      <button className="bg-white text-gray-800 py-2 px-4 rounded-full w-24">Button</button>
    </div>
  </div>
</div>

<div className="container mx-auto py-14 px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* First Column: Mission & Vision */}
  <div className="flex flex-col justify-center">
    <p className="font-bold text-lg text-blue-600">MISSION & VISION</p>
    <h1 className="text-black text-3xl md:text-4xl font-bold mt-2">
      The Best Digital <span className="text-blue-600">Agency</span> Around The World
    </h1>
    <div className="flex flex-wrap gap-4 mt-8">
      <button className="bg-blue-600 text-white py-2 px-4 rounded-full">Our Mission</button>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-full">Our Vision</button>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-full">Our History</button>
    </div>
    <p className="text-justify text-gray-600 mt-5">
      Progressively harness resource-sucking manufactured products after pandemic infomediaries. Seamlessly deliver parallel benefits rather than strategic services. Holistically underwhelm state-of-the-art e-markets via low-risk high-yield convergence.
    </p>
  </div>
  {/* Second Column: FAQs */}
  <div className="flex flex-col">
    <p className="text-lg font-semibold text-blue-600 mb-4">How to install WordPress in a server?</p>
    <p className="text-lg text-gray-600 text-justify mb-4">
      Progressively harness resource-sucking manufactured products during a pandemic. Seamlessly deliver parallel benefits in strategic services holistically.
    </p>
    <p className="text-lg text-black hover:text-blue-600 mb-4">02. What is the Consultation?</p>
    <p className="text-lg text-black hover:text-blue-600">03. How to connect a Device to a PC?</p>
  </div>
</div>
        </>
    )
}

export default About