import React from 'react'
import CardBook from './CardBook'


const SectionCat = ({name, bookList, setSearchField}) => {

    const handleChange = e => {
        setSearchField(e.target.value);
    }

  return (
    <section className='my-5'>
        <div className='flex flex-row justify-between mb-8 items-center'>
            <h1 className='text-xl md:text-3xl font-bold w-full'>
                {name}
            </h1>

            <input 
                className='border-solid border-gray-300 border-2 
                            rounded-lg px-3 w-40 md:w-60'
                placeholder='Search'
                onChange={handleChange}
            />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 
            md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5'
        >
            {/* loop books */}
            {
                bookList && bookList.map((book) => (
                    <CardBook 
                        key={book.id} 
                        props={book} 
                        category={name} 
                    />
                ))
            }
        </div>
        
    </section>
  )
}

export default SectionCat