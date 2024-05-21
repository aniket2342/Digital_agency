import React from 'react'
import cryto1 from '../assets/image_card/cryto1.jpg'
import cryto2 from '../assets/image_card/cryto2.jpg'
import cryto3 from '../assets/image_card/cryto3.jpg'
import cryto4 from '../assets/image_card/cryto4.jpg'


function Footer() {
    return (
        
        <>
            <section class="text-black bg-white body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl text-black">Get In Touch</h1>
                        <p class="text-2xl text-blue-600 mt-4">Hey! Feel Free to Contact with our Experts</p>
                        <p class="text-xl text-gray-600 mt-4">Dynamically promote economically sound experiences whereas best
                            Proactively enable process-centric services rather.</p>
                        <div className='grid grid-cols-2'>
                            <div className='flex flex-row mx-2 mt-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 bg-orange-400 rounded-lg">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <p className='font-semibold text2xl ml-4'  >Call us Now + 98 693 (3890) 237</p>
                            </div>
                            <div className='flex flex-row mx-2 mt-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 bg-blue-600 rounded-lg">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <p className='font-semibold text2xl ml-4'  >Send E-Mail example@gmail.com</p>
                            </div>
                            <div className='flex flex-row mx-2 mt-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 bg-green-600 rounded-lg">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                                </svg>
                                <p className='font-semibold text2xl ml-4'  >
                                    USA Office
                                    125/B New Market,
                                    Sandigo, USA</p>
                            </div>
                            <div className='flex flex-row mx-2 mt-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 bg-green-600 rounded-lg">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                                </svg>

                                <p className='font-semibold text2xl ml-4'  >Dhaka Office
                                    New Elephants Road
                                    Dhanmondi-1212</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-blue-600  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-white text-2xl font-medium title-font mb-5">Right Us Your Query</h2>
                        <div class="relative mb-4 flex gap-4 ">

                            <input type="text" id="full-name" name="full-name" class="w-full bg-whitefocus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='FirstName' />
                            <input type="text" id="full-name" name="full-name" class="w-full bg-whitefocus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='LastName' />
                        </div>
                        <div class="relative mb-4 flex gap-4">
                            <input type="text" id="full-name" name="full-name" class="w-full bg-white  focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Your Name' />
                            <input type="text" id="full-name" name="full-name" class="w-full bg-white  focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Phone' />
                        </div>
                        <input type="text" id="full-name" name="full-name" class="w-full bg-white  focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Select Your Query' />
                        <button class="mt-4 text-white bg-black border-0 py-2 px-8 focus:outline-none  rounded text-lg">Button</button>

                    </div>
                </div>
            </section>

            {/* image card slider */}
            <p class="text-center text-black font-bold text-2xl">We Are Here To <span className='text-blue-600'>Share Story</span></p>  
            <p class="text-center text-black font-bold text-2xl mb-5">From Latest News</p>  
<section class="body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={cryto1}alt="blog"></img>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-black mb-1">Techno | October 29,2023</h2>
            <h1 class="title-font text-lg font-medium text-black mb-3">coin strategy can help youengage audienc</h1>
            <p class="leading-relaxed mb-3">Digital Transformation in healthcare in 2022</p>
            <div class="flex items-center flex-wrap ">
              <a class="textblack inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* image card 2 */}

      <div class="p-4 md:w-1/3">
        <div class="h-full rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={cryto2} alt="blog"></img>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-black mb-1">Techno | October 29,2023</h2>
            <h1 class="title-font text-lg font-medium text-black mb-3">coin strategy can help youengage audience</h1>
            <p class="leading-relaxed mb-3">Digital Transformation in healthcare in 2022</p>
            <div class="flex items-center flex-wrap">
              <a class="text-black inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* card3 */}
      <div class="p-4 md:w-1/3">
        <div class="h-full  rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={cryto3} alt="blog"></img>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-black mb-1">Techno | October 29,2023</h2>
            <h1 class="title-font text-lg font-medium text-black mb-3">coin strategy can help youengage audience</h1>
            <p class="leading-relaxed mb-3">Digital Transformation in healthcare in 2022</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-black inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* footer */}
<footer class="text-white bg-blue-800 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-600 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Techno</span>
      </a>
      <p class="mt-2 text-sm text-white">Completely strategize client-cent Phosfluorescently iterate efficient
internal or organic.</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white">Home </a>
          </li>
          <li>
            <a class="text-white">About us</a>
          </li>
          <li>
            <a class="text-white">Contact Us </a>
          </li>
          <li>
            <a class="text-white">Service</a>
          </li>
          <li>
            <a class="text-white">Our Team</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Popular Post</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white">First Link</a>
          </li>
          <li>
            <a class="text-white">Second Link</a>
          </li>
          
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Contact Info</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white ">Location</a>
          </li>
          <li>
            <a class="text-white ">Email Us</a>
          </li>
          <li>
            <a class="text-white ">Phone Us</a>
          </li>
          
        </nav>
      </div>
      
    </div>
  </div>
  <div class="bg-blue-800">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-white text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-white ml-1" target="_blank">@AniketTiwari</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
        </>
    )
}

export default Footer