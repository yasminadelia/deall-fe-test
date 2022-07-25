import React from 'react'
// import {Link} from '@reach/router'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav 
            className="sticky top-0 bg-blue-900 px-5 md:px-10 lg:px-20 py-5 
            w-screen z-10 flex flex-row items-center justify-between"
        >       
                <Link to="/" className="font-bold text-2xl text-white mr-2">B3k3n</Link>
                <Link to="/bookmark" className="font-bold text-white mr-2">📚 Bookmark</Link>
 
        </nav>
    )
}

export default Navbar