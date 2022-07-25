import React from 'react'

const ButtonCat = ({text, onClick}) => {
  return (
    <button className='border-solid border-2 border-gray-200 
          rounded-lg p-2 hover:bg-gray-200 mr-2 mb-2'
          onClick={onClick}
    >
        <p className='text-sm md:text-base font-semibold'>{text}</p>
    </button>
  )
}

export default ButtonCat