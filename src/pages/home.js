import React, { useEffect, useState } from 'react'
import ButtonCat from '../components/ButtonCat'
import SectionCat from '../components/SectionCat'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {

  const categoryAPI = 'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories';
  const bookAPI = 'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books';

  const [catList, setCatList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [categoryName, setCategoryName] = useState("Happiness & Mindfulness");
  const [searchField, setSearchField] = useState();
  const [filteredBookList, setFilteredBookList] = useState();

  useEffect(() => {
    getCategories();
    getBookList(1,0);
  }, [])

  useEffect(() => {
    const filtered = bookList.filter(
      book => 
        book.title.toLowerCase().includes(searchField.toLowerCase()) 
        || book.authors[0].toLowerCase().includes(searchField.toLowerCase())                   
      )
    setFilteredBookList(filtered);
  }, [searchField])

  const getCategories = () => {
    return axios.get(
      categoryAPI
    ).then(resp => {
        if(resp.status === 200) {
          setCatList(resp.data);
        }
    }).catch(err => {
        console.log(err);
    })
  }

  const getBookList = (categoryId, page, size) => {
    return axios.get(
      bookAPI + `?categoryId=${categoryId}&page=${page}&size=${size}`
    ).then(resp => {
        if(resp.status === 200) {
          setBookList(resp.data);
          setFilteredBookList(resp.data);
        }
    }).catch(err => {
        console.log(err);
    })
  }

  const handleCategory = (id, page, title) => {
    getBookList(id, page);
    setCategoryName(title);
  }

  return (
    <div>
    <Navbar />
      <div className='py-5 lg:py-10 px-5 md:px-10 lg:px-20 h-full'>
          <div>
              <h3 className='font-semibold mb-5 text-lg'>Explore Categories</h3>
              <div className='flex flex-wrap'>
                  {/* loop from api */}
                  {
                    catList && catList.map((category) => (
                       <ButtonCat 
                        key={category.id} 
                        text={category.name} 
                        onClick={() => handleCategory(category.id,0,category.name)}
                      />
                    ))
                  }
              </div>
              <SectionCat 
                name={categoryName} 
                bookList={filteredBookList}
                setSearchField={setSearchField}
              />

          </div>
      </div>
    <Footer />
    </div>
  )
}

export default Home