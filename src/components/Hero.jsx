import React from 'react'
import { FaArrowRight, FaPlay, FaChevronRight, } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";

const title = "Discover Your Next Favorite Book";
const description = "Thousands of books at your fingertips, ready to inspire and entertain.";



export const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    

        <div >
          <FaBookOpen className="mx-auto text-white text-8xl bg-orange-400 py-3 px-4 mb-5 rounded-3xl " />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {description}

        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Learn more
            <FaArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </a>
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <FaPlay className="mr-2 -ml-1 w-5 h-5" />
            Watch video
          </a>
        </div>

      </div>
    </section>

  )
}

