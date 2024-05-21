import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/navigation'; // Import Swiper Navigation styles
import 'swiper/css/pagination'; // Import Swiper Pagination styles
import 'swiper/css/effect-fade'; // Import Swiper Fade Effect styles
import img1 from '../assets/professional_employee/emp1.jpg';
import img2 from '../assets/professional_employee/emp2.jpg';
import img3 from '../assets/professional_employee/emp3.jpg';
import img4 from '../assets/professional_employee/emp4.jpg';
import img5 from '../assets/about.png'
import img6 from '../assets/testiminsaal.jpg'
import img7 from '../assets/bussiness.jpg'

function Showcase() {
  return (
    <>
      <div className="bg-blue-950 mx-auto w-full h-auto py-10">
  <div className="flex justify-center mb-10">
    <div className="flex flex-col items-center max-w-lg text-center">
      <p className="text-white font-bold text-4xl">
        Latest Work <span className="text-blue-600">Showcase</span>
      </p>
      <p className="text-white mt-5">
        Proactively enable process-centric services rather than scenarios
      </p>
      <p className="text-white">
        to syndicate future-proof outside the thinking.
      </p>
    </div>
  </div>
  
  <div className="container mx-auto">
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-auto max-w-screen-lg">
          {/* img1 */}
          <div className="relative">
            <img src={img1} alt="Financial Marketing" className="block w-full" />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-0 transition-opacity duration-500 ease-in-out hover:bg-opacity-75 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-xl">Solution For Financial</p>
                <p>Marketing</p>
              </div>
            </div>
          </div>
          {/* img2 */}
          <div className="relative">
            <img src={img2} alt="Technology & Business Design" className="block w-full" />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-0 transition-opacity duration-500 ease-in-out hover:bg-opacity-75 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-xl">Technology & Business</p>
                <p>Design</p>
              </div>
            </div>
          </div>
          {/* img3 */}
          <div className="relative">
            <img src={img3} alt="IT Solution & Technology Design" className="block w-full" />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-0 transition-opacity duration-500 ease-in-out hover:bg-opacity-75 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-xl">IT Solution & Technology</p>
                <p>Design</p>
              </div>
            </div>
          </div>
          {/* img4 */}
          <div className="relative">
            <img src={img4} alt="Business Design and Marketing" className="block w-full" />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-0 transition-opacity duration-500 ease-in-out hover:bg-opacity-75 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-xl">Solution For Business</p>
                <p>Design and Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>


        <section className="text-gray-400  body-font">
          <div className="container px-5 py-24 mx-auto">

            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-white px-4 py-6 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-indigo-400 w-12 h-12 mb-3 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>

                  <h2 className="title-font font-medium text-3xl text-white">86K</h2>
                  <p className="leading-relaxed text-white">Project Done</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-white px-4 py-6 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-indigo-400 w-12 h-12 mb-3 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>


                  <h2 className="title-font font-medium text-3xl text-white">12K</h2>
                  <p className="leading-relaxed text-white">Happy Customers</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-white px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-white">17+</h2>
                  <p className="leading-relaxed text-white">Year Experience</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 borderwhite px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-white">83+</h2>
                  <p className="leading-relaxed text-white">Award Wining</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="text-black body-font">
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Column: Responsive Image */}
          <div className="relative">
            <img className="w-full h-full object-cover object-center" src={img5} alt="Responsive Image" />
          </div>

          {/* Second Column: Header Texts */}
          <div className="flex flex-col justify-center">
            <p className='text-lg text-blue-600 font-semibold'>COMPANY SKILLS</p>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black mb-4">The Right Place For Your
              <span className='text-blue-600'>Digital</span> Business</h1>
            <p className="sm:text-xl title-font font-medium text-black mb-4">Dynamically promote economically sound experiences Proactively enable process services.</p>
            <h1 className="sm:text-xl text-2xl title-font text-gray-600 mb-4 text-justify">best the
              Proactively enable process-centric services rather than B2B scenarios to
              syndicate future-proof outside the thinking.</h1>

            <div className='flex flex-col md:flex-col'>
              <div className='flex flex-col'>
                <p className='text-black font-bold text-lg ml-2'>Business consulting</p>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-orange-600 "></hr>
              </div>
              <div className='flex'>
                <p className='text-black font-bold text-lg ml-2'>
                  Marketing Strategy</p>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-blue-600 "></hr>
              </div>
              <div className='flex'>
                <p className='text-black font-bold text-lg ml-2'>
                  SEO Marketing</p>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-green-600 "></hr>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>

              <button className="bg-blue-600 text-white rounded-full w-1/2  ">Discover the more</button>
            </div>
          </div>
        </div>
      </section>

      {/* testimonisal */}
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img6})` }}>
  <div className="h-screen bg-black bg-opacity-80 relative flex flex-col justify-between">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-10">
      <div className="text-center md:text-left">
        <h1 className="font-semibold text-xl text-white mb-2">TESTIMONIAL</h1>
        <p className="font-bold text-white text-4xl w-full md:w-3/4">Our Trusted Customers <span className="text-blue-600">Awesome</span> Reviews</p>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6 md:mt-0">
        <div className="px-4 py-6 bg-blue-600 bg-opacity-80 rounded-lg text-center">
          <h2 className="title-font font-medium text-3xl text-white">12K</h2>
          <p className="leading-relaxed text-white">Happy Customers</p>
        </div>
        <div className="px-4 py-6 bg-blue-600 bg-opacity-80 rounded-lg text-center">
          <h2 className="title-font font-medium text-3xl text-white">100%</h2>
          <p className="leading-relaxed text-white">Satisfaction Rate</p>
        </div>
      </div>
    </div>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg p-5 md:absolute md:bottom-10">
      <div className="flex flex-col justify-center bg-blue-600 p-5 rounded-lg">
        <div className="flex items-center">
          <img src={img2} className="w-20 rounded-full" alt="Kylie Jenner" />
          <div className="ml-5">
            <p className="font-bold text-lg text-white">Kylie Jenner</p>
            <p className="text-white">(Web Developer)</p>
          </div>
        </div>
        <p className="mt-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ratione fuga error possimus tempore ipsam pariatur veniam adipisci, consequatur vero placeat voluptate laudantium praesentium consequuntur? Esse accusantium perferendis quod aspernatur?</p>
      </div>
      <div className="flex items-center justify-center">
        <img src={img7} className="w-full rounded-lg" alt="Customer Review" />
      </div>
    </div>
  </div>
</div>
<div className="container w-full mt-36 flex flex-col md:flex-row justify-between items-center">
  <div className="ml-5">
    <p className="font-semibold text-blue-600 text-2xl">EXPERT TEAM</p>
    <p className="font-bold text-black text-4xl">Meet The <span className="text-blue-600">Expert</span> Member</p>
  </div>
  <div className="mr-5 mt-5 md:mt-0">
    <button className="bg-blue-600 text-white rounded-full w-64 px-3 py-3">Discover More</button>
  </div>
</div>
{/* Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 ml-5 mb-10">
  {/* First Column */}
  <div className="flex flex-col items-center">
    <img src={img1} alt="David Alexon" className="rounded-lg mb-4 w-full h-auto object-cover"/>
    <h2 className="font-semibold text-2xl">David Alexon</h2>
    <p className="text-blue-600">App Developer</p>
  </div>

  {/* Second Column */}
  <div className="flex flex-col items-center">
    <img src={img2} alt="Laura" className="rounded-lg mb-4 w-full h-auto object-cover"/>
    <h2 className="font-semibold text-2xl">Laura</h2>
    <p className="text-blue-600">UI Designer</p>
  </div>

  {/* Third Column */}
  <div className="flex flex-col items-center">
    <img src={img3} alt="David Sen" className="rounded-lg mb-4 w-full h-auto object-cover"/>
    <h2 className="font-semibold text-2xl">David Sen</h2>
    <p className="text-blue-600">HR Manager</p>
  </div>

  {/* Fourth Column */}
  <div className="flex flex-col items-center">
    <img src={img4} alt="Sam" className="rounded-lg mb-4 w-full h-auto object-cover"/>
    <h2 className="font-semibold text-2xl">Sam</h2>
    <p className="text-blue-600">UI Designer</p>
  </div>
</div>

<div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img6})` }}>
  <div className="h-screen bg-black bg-opacity-80 flex flex-col justify-center items-center">
    <div className="container mx-auto text-center">
      <h1 className="font-semibold text-2xl text-white mt-10">Watch Video</h1>
      <p className="font-bold text-white text-4xl mt-4">Mission Is To Protect Your <span className="text-blue-600">Business</span> More.</p>
      <p className="text-white mt-2">Promote economically sound experiences whereas best.</p>
      <button className="bg-blue-600 text-white rounded-full w-64 px-4 py-3 mt-4">Discover More</button>
    </div>
  </div>
</div>
    </>
  );
}

export default Showcase;
