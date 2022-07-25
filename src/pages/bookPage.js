import React from 'react'
import { useLocation } from "react-router-dom";
import Button from '../components/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BookPage = () => {

    const location = useLocation();
    const { props } = location.state;

    return (
        <div>
            <Navbar />
            <div className='py-5 lg:py-10 px-5 md:px-10 lg:px-20 h-full'>
                <div className='flex flex-col md:flex-row md:items-center'>
                    <img 
                        src={props.cover_url} 
                        alt='Title'
                        className='w-60 md:w-max md:h-72 md:mr-10 
                        rounded-lg drop-shadow-lg mx-auto md:mx-0
                        mb-3 md:mb-0'
                    />
                    <div className='lg:w-1/3'>
                        <h1 className='text-xl md:text-4xl font-bold mb-1 md:mb-3'>
                            {props.title}
                        </h1>
                        <div className='text-lg md:text-xl font-bold text-gray-600'>
                            {props.authors.map(author => 
                                <h3> {author}</h3>
                            )}
                        </div>
                        <hr className='mt-4 mb-2 '/>
                        <div className='flex flex-row space-x-10
                            font-semibold text-gray-600'
                        >
                            <p>📃 {props.sections.length} chapters</p>
                            <p>⏰ {Math.round(props.audio_length/60)} min</p>
                        </div>
                        <hr className='mt-2 mb-4 '/>
                        <div className='flex flex-row space-x-5'> 
                            <Button text={'🎧 Listen'}/>
                            <Button text={'📖 Read'}/>
                        </div>
                    </div>
                </div> 
                <div>
                    <h2 className='text-2xl font-bold mt-5 mb-3'>
                        What's it about?
                    </h2>
                    <p>{props.description}</p>
                </div>
                <div className='pb-5'>
                    <h2 className='text-2xl font-bold mt-5 mb-3'>
                        What's inside?
                    </h2>
                    <ol className='list-decimal mx-5'>
                        {/* loop title */}
                        {
                            props.sections.map((section, idx) => (
                                <li key={idx} className='text-blue-900 font-bold'>
                                    <p className>{section.title}</p>
                                    <hr className='my-3'/> 
                                </li>
                            ))
                        }
                        
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BookPage