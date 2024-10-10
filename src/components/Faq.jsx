import React from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
const sectionTitle = "Frequently Asked Questions";
const sectionDescription = "Find answers to common questions about how to search, buy, and read books on our platform. We want to make your experience as seamless as possible, so feel free to explore our FAQs below.";

const faqArray = [
    {
        question: "How can I search for a specific book?",
        answer: "You can use the search bar at the top of the page to type in the name of the book or author. The site will then display a list of books matching your search criteria."
    },
    {
        question: "Can I download books from the website?",
        answer: "Yes, you can download many books in PDF format after logging in. Some books may be available for browsing only, depending on copyright restrictions."
    },
    {
        question: "Are the books on the website free?",
        answer: "We offer a collection of both free and paid books. You can browse the free section to download available books at no cost, or view paid books and purchase them through our payment gateway."
    },
    {
        question: "How can I buy a book?",
        answer: "You can click on the 'Buy Now' button next to the desired book. You will be redirected to the payment page where you can use your credit card or other available payment methods to complete the purchase."
    },
    {
        question: "Can I read books on my mobile phone?",
        answer: "Absolutely! Our website is responsive across all devices, allowing you to read books using your mobile phone or tablet. You can also download the book for offline reading."
    }
];



export const Faq = () => {
    return (


        <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {sectionTitle}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            {sectionDescription}
  
          </p>







        <div className="">

            <Accordion collapseAll className="w-full border-0  ">
                {faqArray.map(({question,answer}, index)=>(
                <AccordionPanel>
                    <AccordionTitle>{question}</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            {answer}
                        </p>

                    </AccordionContent>
                </AccordionPanel>
          
      ))}
            </Accordion>
        </div>

        </div>
</section>
    )
}



