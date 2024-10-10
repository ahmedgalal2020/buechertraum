import { Button } from "flowbite-react";

import {Hero} from "@/components/Hero";
import {MobileGallary} from "@/components/MobileGallary";
import {Filter} from "@/components/Filter";
import { Faq } from '@/components/Faq';

export default function Home() {
  return (
      <>
      <Hero />
      <MobileGallary />
      <Filter />
      <Faq />
      </>
  


     
  );
}
