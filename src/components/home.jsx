import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <>
    
                <nav class="w-full border-b">
                    <div class="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
                        <div aria-label="Home. logo" role="img">
                           
                        </div>
                        <div>
                            <button onclick="toggleMenu(true)" class="dark:bg-white rounded sm:block md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-200 focus:text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
                               asdfg
                            </button>
                            <div id="menu" class="md:block lg:block hidden">
                                <button onclick="toggleMenu(false)" class="dark:bg-white rounded block md:hidden lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-200 focus:text-gray-700 dark:text-gray-200 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6">
                                    asdfg
                                </button>
                                <ul class="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                                </ul>
                            </div>
                        </div>
                        <Link to='/find'>
                        <button class="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Find a doctor</button>
                        </Link>
                    </div>
                </nav>
                <div class="bg-gray-100 dark:bg-transparent">
                    <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
                        <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-7 md:leading-10">
                                The Freedom to Consult a
                                <span class="text-indigo-700">{' '}Doctor{' '}</span>
                                From Anywhere
                            </h1>
                            <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg"> Get professional medical help from around The World. <br/> Anytime. Anywhere. At Your Finger Tips. </p>
                        </div>
                        <div class="flex justify-center items-center">
                          <Link to='/find'>
                            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</button>
                          </Link>
                        </div>
                    </div>
                </div>
  </>    
  )
}

export default home
