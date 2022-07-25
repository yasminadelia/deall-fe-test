import React from 'react'

const Button = ({text}) => {
  return (
    <div 
        className='px-auto my-3 border-solid 
        border-2 border-blue-900 hover:bg-blue-900 
        rounded-lg w-full py-2 md:py-3
        text-blue-900 hover:text-white
        cursor-pointer'
    >
        <p 
            className='text-center font-semibold' 
        >
            {text}
        </p>
    </div>
  )
}

export default Button