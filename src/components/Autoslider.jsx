"use client"

import React from 'react';
import Image from 'next/image';



export const Autoslider = ({images, duration}) => {
  return (
    <div className="slider h-72 mt-10 overflow-hidden">
    <div className=" flex gap-5 cursor-pointer animate-swipe hover:[animation-play-state:paused]" style={{animationDuration:`${duration}s`}}>
      {[...images, ...images, ...images].map(({ src, title, name, description }, index) => (
        <div key={index} className="mb-4 flex flex-col items-start flex-shrink-0">
          <Image
            src={src}
            alt={title}
            width={195}
            height={195}
            className="w-52 h-52 object-cover rounded-md"
          />
          <span className="pt-2 dark:text-white  ">{name}</span>
          <span className="pt-2 dark:text-white ">{description}</span>
        </div>
      ))}
    </div>
    
    </div>

  );
};
