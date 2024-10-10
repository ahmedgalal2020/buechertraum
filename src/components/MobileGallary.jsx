"use client"
import Image from 'next/image'
import {Parallax, ParallaxProvider } from "react-scroll-parallax"


const MobileImages= [

    {src:"/assets/images/iphone_01.png", title:"Audio Book1", speed:20},
    {src:"/assets/images/iphone_02.png", title:"Audio Book2", speed:40},
    {src:"/assets/images/iphone_03.png", title:"Audio Book3", speed:10},
    {src:"/assets/images/iphone_04.png", title:"Audio Book4", speed:35},
    {src:"/assets/images/iphone_05.png", title:"Audio Book5", speed:20},
]

export const MobileGallary = () => {
  return (
    <ParallaxProvider>
    <div className="flex gap-10 mx-auto justify-center aligen-middle overflow-hidden h-[38rem] max-w-[1600px] ">
    {MobileImages.map(({src, title, speed}) =>(
        <Parallax speed={speed} > <Image src={src} alt={title} width={279} height={576}/> </Parallax>

    ))}
    
    </div>
    </ParallaxProvider>
  )
}
