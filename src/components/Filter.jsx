import React from 'react';
import { FaBookOpen } from 'react-icons/fa6';
import { Autoslider } from './../components/Autoslider';

const title = "We invest in the world’s potential";
const description = "We invest in the world’s potential";

const Bestsiller = [
  {src:"/assets/images/book_01.jpg", title:"1984", name:"George Orwell", description:"Dystopian Classic"},
  {src:"/assets/images/book_02.jpg", title:"To Kill a Mockingbird", name:"Harper Lee", description:"Civil Rights"},
  {src:"/assets/images/book_03.jpg", title:"The Great Gatsby", name:"F. Scott Fitzgerald", description:"American Dream"},
  {src:"/assets/images/book_04.jpg", title:"Moby Dick", name:"Herman Melville", description:"Whale Adventure"},
  {src:"/assets/images/book_05.jpg", title:"Pride and Prejudice", name:"Jane Austen", description:"Romantic Drama"},
  {src:"/assets/images/book_06.jpg", title:"The Catcher in the Rye", name:"J.D. Salinger", description:"Teen Angst"},
  {src:"/assets/images/book_07.jpg", title:"War and Peace", name:"Leo Tolstoy", description:"Historical Epic"},
];

const TrendingEbooks = [
  {src:"/assets/images/book_08.jpg", title:"The Hobbit", name:"J.R.R. Tolkien", description:"Fantasy Journey"},
  {src:"/assets/images/book_09.jpg", title:"Harry Potter and the Sorcerer's Stone", name:"J.K. Rowling", description:"Wizard Adventure"},
  {src:"/assets/images/book_10.jpg", title:"The Lord of the Rings", name:"J.R.R. Tolkien", description:"Epic Quest"},
  {src:"/assets/images/book_11.jpg", title:"The Alchemist", name:"Paulo Coelho", description:"Spiritual Journey"},
  {src:"/assets/images/book_12.jpg", title:"Brave New World", name:"Aldous Huxley", description:"Dystopian Future"},
  {src:"/assets/images/book_13.jpg", title:"The Road", name:"Cormac McCarthy", description:"Post-Apocalyptic"},
  {src:"/assets/images/book_14.jpg", title:"The Da Vinci Code", name:"Dan Brown", description:"Thriller Mystery"},
];



export const Filter = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{description}</p>
        <div className="flex justify-center">
          <ul className='flex flex-col sm:flex-row rounded-xl sm:rounded-full justify-center align-middle gap-3 text-sm bg-gray-200 p-2 '>
            <li className='px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white'>Bestselling Audiobooks</li>
            <li className='px-4 py-2 rounded-full cursor-pointer select-none bg-gray-900 text-white'>New & Treinding Ebooks</li>
            <li className='px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white'>Fan-Favorite Audiobooks</li>
          </ul>
        </div>


        <Autoslider images={Bestsiller} duration={20} />
        <Autoslider images={TrendingEbooks} duration={25} />

      </div>
    </section>
  );
};