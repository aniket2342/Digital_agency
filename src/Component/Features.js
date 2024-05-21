import React from 'react'

function Features() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Checkout our <span className='text-blue-600'>company</span></h1>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">the Service Below</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3 ">
        <div className="  border border-orange-600 flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
        {/* col 1 */}
        <div className="ml-24 w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white flex-shrink-0">  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>

            </div>

          <div className="flex items-center mt-4 mb-3">
            <h2 className="text-white text-lg title-font font-medium">Smart Business Strategy</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Monotonectally actualize customer methodologies rather than.</p>
            <a className="mt-3 text-orange-600 inline-flex items-center">Learn More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>

            </a>
          </div>
        </div>
      </div>

       {/* col 2 */}
      <div className="p-4 md:w-1/3">
        <div className="border border-blue-600 flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
        <div className=" ml-24 w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        </div>

          <div className="flex items-center mb-3 mt-4">
            <h2 className="text-white text-lg title-font font-medium">Trend Market Analysis</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Monotonectally actualize customer methodologies rather than</p>
            <a className="mt-3 text-blue-600 inline-flex items-center">Learn More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

              
            </a>
          </div>
        </div>
      </div>

      {/* col-3 */}
    
      <div className="p-4 md:w-1/3">
        <div className="border border-yellow-600 flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
        <div className="ml-24 w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-600 text-white flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>

            </div>
          <div className="flex items-center mb-3 mt-4">
            <h2 className="text-white text-lg title-font font-medium">Business Growing Strategy</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Monotonectally actualize customer methodologies rather than</p>
            <a className="mt-3 text-yellow-600 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* col-4 */}
      <div className="p-4 md:w-1/3">
        <div className="border border-red-600 flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
        <div className="ml-24 w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-600 text-white flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>
        </div>
          <div className="flex items-center mb-3 mt-4">
            <h2 className="text-white text-lg title-font font-medium">Smart Money Transfer</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Monotonectally actualize customer methodologies rather than.</p>
            <a className="mt-3 text-red-600 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Features