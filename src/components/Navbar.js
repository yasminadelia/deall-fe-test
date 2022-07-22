import React from 'react'
// import {Link} from '@reach/router'

const Navbar = () => {
    return (
        <nav 
            className="static bg-blue-900 px-5 xl:px-10 py-7 w-screen z-50"
        >
            <div className="flex flex-row items-center justify-between"> 
                    
                <p className="font-bold text-2xl text-white mr-2">B3k3n</p>
                <p className="font-bold text-white mr-2">📚 Bookmark</p>
                            
            </div>
        
        </nav>
    )
}

export default Navbar