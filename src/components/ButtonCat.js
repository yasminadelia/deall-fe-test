import React from 'react'

const ButtonCat = ({text, onClick, style}) => {
  return (
    <button className={`flex items-center justify-center border-solid border-2 border-gray-200 
          rounded-lg p-2 hover:bg-gray-200 mr-2 mb-2 ${style}`}
          onClick={onClick}
    >
        <p className='text-sm md:text-base font-semibold'>{text}</p>
    </button>
  )
}

export default ButtonCat