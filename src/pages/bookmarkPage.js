import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const BookmarkPage = () => {

    const localItems = {...localStorage};
    const [bookmarkList, setBookmarkList] = useState([]);
    // const [searchField, setSearchField] = useState();
    // const [filteredBookmarkList, setFilteredBookmarkList] = useState();
    // console.log(localItems);

    useEffect(() => {
        const array = []
        for(let item in localItems){
            let book = JSON.parse(localStorage.getItem(item))
            array.push(book);
        }
        setBookmarkList([...array]);
        // setFilteredBookmarkList([...array]);
    }, [])
    
    // useEffect(() => {
    //     const filtered = bookmarkList.filter(
    //       book => 
    //         book.title.toLowerCase().includes(searchField.toLowerCase()) 
    //         || book.authors[0].toLowerCase().includes(searchField.toLowerCase())                   
    //       )
    //     setFilteredBookmarkList(filtered);
    //   }, [searchField])
    
  return (
    <div>
        <Navbar />
        <div className='flex flex-col py-5 lg:py-10 px-5 md:px-10 lg:px-20 h-full'>
            {/* <input 
                className='border-solid border-gray-300 border-2 
                            rounded-lg px-3 mb-5 h-10'
                placeholder='Search'
                onChange={event => setSearchField(event.target.value)}
            /> */}

            {/* bookmarked list - loop */}
            {
                bookmarkList && bookmarkList.map((item) => (
                    <div key={item.id} className='mr-5 mb-5 flex flex-row items-center'>
                        <img 
                            src={item.cover_url} alt={item.title} 
                            className="max-h-60 mb-2 rounded-lg"
                        />
                        <div className='space-y-2 ml-5 '>
                            <p className='text-3xl text-blue-900 font-bold'>{item.title}</p>
                            {item.authors.map((author) => 
                                <p className='text-xl text-gray-600 font-bold'>{author}</p>
                            )}
                        </div>
                    </div> 
                ))
            }

            
        </div>

        <Footer />
    </div>
  )
}

export default BookmarkPage