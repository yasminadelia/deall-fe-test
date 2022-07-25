import React from 'react'
import { useLocation } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ReadPage = () => {

    const location = useLocation();
    const { section, idx } = location.state;

    return (
        <div>
            <Navbar />
            <div className='py-5 px-5 md:px-10 lg:px-20 h-full'>
                <div>
                    <h2 className='text-2xl font-bold mt-5 mb-3'>
                        {idx+1}. {section.title}
                    </h2>
                    <p>{section.content}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ReadPage