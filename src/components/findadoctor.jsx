import React from 'react'
import { Link } from 'react-router-dom'

const findadoctor = () => {
  return (
    <div>
              <div class="mb-16">
                      <div class="container flex justify-center mx-auto pt-16">
                          <div>
                              <p class="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3">Doctors available</p>
                              <h1 class="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Consult to best medical practitioners available</h1>
                          </div>
                      </div>
                      <div class="w-full bg-gray-100 dark:bg-gray-800 px-10 pt-10">
                          <div class="container mx-auto">
                              <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                                  <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                      <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                          <div class="absolute -mt-20 w-full flex justify-center">
                                              <div class="h-32 w-32">
                                                  <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Andres Berlin" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                              </div>
                                          </div>
                                          <div class="px-6 mt-16">
                                              <h1 class="font-bold dark:text-white text-3xl text-center mb-1">Andres Berlin</h1>
                                              <p class="text-gray-800 dark:text-white text-sm text-center"> Orthopedic Surgeon MBBS, MD </p>
                                              <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                                                Works at Leela Group Of hospitals, Sector 1, Rourkela.
                                              </p>
                                              <div class="w-full flex justify-center pt-5 pb-5">
                                                <Link to='/conference'>
                                                  <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"   > talk.. </button>
                                                </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div role="listitem" class="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                      <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                          <div class="absolute -mt-20 w-full flex justify-center">
                                              <div class="h-32 w-32">
                                                  <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt="Display Picture of Silene Tokyo" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                              </div>
                                          </div>
                                          <div class="px-6 mt-16">
                                              <h1 class="font-bold dark:text-white text-3xl text-center mb-1">Silene Tokyo</h1>
                                              <p class="text-gray-800 dark:text-white text-sm text-center"> Dermatologist </p>
                                              <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                                                Works at Health Centre, NIT Rourkela.
                                              </p>
                                              <div class="w-full flex justify-center pt-5 pb-5">
                                                <Link to='/conference'>
                                                  <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"   > talk.. </button>
                                                </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                      <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                          <div class="absolute -mt-20 w-full flex justify-center">
                                              <div class="h-32 w-32">
                                                  <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt="Display Picture of Johnson Stone" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                              </div>
                                          </div>
                                          <div class="px-6 mt-16">
                                              <h1 class="font-bold dark:text-white text-3xl text-center mb-1">Johnson Stone</h1>
                                              <p class="text-gray-800 dark:text-white text-sm text-center"> Gynecologist </p>
                                              <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                                                Works At CWS  Hospital, Rkl</p>
                                              <div class="w-full flex justify-center pt-5 pb-5">
                                                <Link to='/conference'>
                                                  <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"   > talk.. </button>
                                                </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
              </div>
    </div>
  )
}

export default findadoctor
