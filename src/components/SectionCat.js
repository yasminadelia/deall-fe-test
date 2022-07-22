import React from 'react'
import CardBook from './CardBook'

const book = {image:"https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/703096ac-3749-41b0-8637-e37d9e29179e.png", title:'Harry Potter', author:'J.K. Rowling', category: 'Fantasy'};

const SectionCat = ({title}) => {
  return (
    <section className='my-5'>
        <div className='flex flex-row justify-between mb-4'>
            <h1 className='text-3xl font-bold'>
                {title}
            </h1>

            <input 
                className='border-solid border-gray-300 border-2 
                            rounded-lg px-3'
                placeholder='Search'
            />
        </div>
        <div className='flex flex-wrap'>
            {/* loop books */}
            <CardBook props={book}/>
            <CardBook props={book}/>
            <CardBook props={book}/>
            <CardBook props={book}/>
            <CardBook props={book}/>
        </div>
        
    </section>
  )
}

export default SectionCat