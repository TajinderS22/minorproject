import React from 'react';
import {Link} from 'react-router';



const Navbar =()=>{
    return(
        <div className=" nav-container max-w-7xl w-11/12 h-16 items-center flex justify-between mx-auto rounded-md px-2 ">
            <div>
                <h1 className='brand-text font-bold font-serif flex items-center text-2xl' >Agro Advisors</h1>

            </div>
            <div className=" nav-links mt-1 pr-2">
                <ul className=" flex font-medium text-lg items-center ">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to='/Authentication'>
                            <button className='nav-entry-button '>Signup</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;