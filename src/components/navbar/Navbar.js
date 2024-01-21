import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import "./navbar.css";


const Navbar = ()=>{
    return(
        <nav className="flex">
            <button className="flex btn">
                Menu
                <img className="icon-down" src="/images/down.png" alt="down-arrow"></img>
            </button>
            
            <Link to="/" className="nav-logo h2">PRO ATHLETES INDIA</Link>

            <HashLink to="#footer" className="btn btn-dark">
                CONTACT US
            </HashLink>
        </nav>
    )
}


export default Navbar;