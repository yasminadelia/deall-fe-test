import React from 'react'
import ButtonCat from '../components/ButtonCat'
import SectionCat from '../components/SectionCat'

const Home = () => {
  return (
    <div className='m-5 xl:m-10'>
        <div>
            <h3 className='font-semibold mb-5 text-lg'>Explore Categories</h3>
            <div className='flex flex-wrap space-x-2'>
                {/* loop from api */}
                <ButtonCat text='🌍 All'/>
                <ButtonCat text='🌍 All'/>
            </div>
            <SectionCat title='All'/>

        </div>
    </div>
  )
}

export default Home