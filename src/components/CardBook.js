import React from 'react'

const CardBook = ({props}) => {
    console.log(props);
    return (
        <div className='mr-5 mb-5'>
            <img 
                src={props.image} alt={props.title} 
                className="h-60 mb-2"
            />
            <p className='font-bold'>{props.author}</p>
            <p className='text-sm'>{props.category}</p>
        </div>
    )
}

export default CardBook