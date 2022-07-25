import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const props = {
    image:"https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/703096ac-3749-41b0-8637-e37d9e29179e.png", title:'Harry Potter', 
    author:'J.K. Rowling', 
    category: 'Fantasy',
    id: 1,
};

const BookmarkPage = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-col py-5 lg:py-10 px-5 md:px-10 lg:px-20 h-full'>
            <input 
                className='border-solid border-gray-300 border-2 
                            rounded-lg px-3 mb-5 h-10'
                placeholder='Search'
            />

            {/* bookmarked list - loop */}

            <div className='mr-5 mb-5 flex flex-row items-center'>
                <img 
                    src={props.image} alt={props.title} 
                    className="max-h-60 mb-2 rounded-lg"
                />
                <div className='space-y-2 ml-5 '>
                    <p className='text-3xl text-blue-900 font-bold'>{props.title}</p>
                    <p className='text-xl text-gray-600 font-bold'>{props.author}</p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default BookmarkPage