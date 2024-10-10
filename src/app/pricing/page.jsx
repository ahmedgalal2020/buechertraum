"use client";
import React from 'react'
import { BannerCollapseButton,Datepicker,Banner, Button, Label, TextInput } from "flowbite-react";
import { HiArrowRight, HiX,HiMail  } from "react-icons/hi";
import { MdPercent } from "react-icons/md";



const pricing = () => {
  return (
    <div className="mx-auto  h-full	 text-center dark:bg-gray-900 dark:text-white text-3xl p-4	">
    <div className='max-w-screen-xl'>Pricing</div>
    

    <Banner>
    <div className="flex  justify-between border-t border-gray-200 bg-gray-50 my-5 p-4 dark:border-gray-600 dark:bg-gray-700">
      <div className="mx-auto flex items-center">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-600">
            <MdPercent className="h-4 w-4" />
          </span>
          <span className="[&_p]:inline">
            Get 50% commision per sale&nbsp;
            <a
              href="#"
              className="ml-0 flex items-center text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500 md:ml-1 md:inline-flex"
            >
              Become a partner
              <HiArrowRight className="ml-2" />
            </a>
          </span>
        </p>
      </div>
      <BannerCollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
        <HiX className="h-4 w-4" />
      </BannerCollapseButton>
    </div>
  </Banner>


      <Banner>
      <div className="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
          <form action="#" className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
            <Label
              htmlFor="email"
              className="mb-2 mr-auto shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
            >
              Sign up for our newsletter
            </Label>
            <TextInput id="email" placeholder="Enter your email" required type="email" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
        <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>



    </div>
  
  )
}

export default pricing