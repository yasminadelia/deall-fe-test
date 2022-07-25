import React from 'react'
import { Link } from 'react-router-dom';

const CardBook = ({props, category}) => {
    return (
        <Link 
            to='/book'
            state={{ props: props }}
        >
            <div className='mb-5'>
                <img 
                    src={props.cover_url} alt={props.title} 
                    className="max-h-80 mb-2 rounded-lg"
                />
                {props.authors.map(author => 
                    <p className='font-bold'>{author}</p>
                )}
                <p className='text-sm'>{category}</p>
            </div>
        </Link>
    )
}

export default CardBook