import React from 'react'
import CardBook from './CardBook'
import ButtonCat from './ButtonCat';

const SectionCat = ({name, bookList, setSearchField, handlePageClick, currentPage}) => {

    const pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25];         

    const handleChange = e => {
        setSearchField(e.target.value);
    }

  return (
    <section className='my-5'>
        <div className='flex flex-row justify-between mb-6 items-center'>
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
        <div className='flex flex-row justify-end mb-6 flex-wrap'>
            {
                pages.map((page, idx) => {
                    if(page === currentPage) {
                        return <ButtonCat 
                                    key={idx} 
                                    text={page} 
                                    onClick={handlePageClick}
                                    style={'w-8 h-8 mr-0 bg-gray-300'}
                                />
                    } else {
                        return <ButtonCat 
                                    key={idx} 
                                    text={page} 
                                    onClick={handlePageClick}
                                    style={'w-8 h-8 mr-0'}
                                />
                    }
                })
            }
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