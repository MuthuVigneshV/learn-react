import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

  return (
    <div className='navbar'>
        <div className='navbar_container'>
            <Link to="/" className='navbar_logo'>
                <h2 className='nav_logo_name'>Muthu Vignesh</h2>
                <h2 className='nav_logo_desig'>Web Dev</h2>
            </Link>

            <div className='ham' onClick={toggleMenu}>
                {menuOpen ? <IoClose fontSize="24px" /> : <RxHamburgerMenu fontSize="24px" />}
            </div>
            
            <div className='navbar_anchors'>
                <div className='navitems'>
                    <Link to="/">Home</Link>
                <hr/>
                </div>
                <div className='navitems'>
                    <Link to="/projects">Projects</Link>
                <hr/>
                </div>
                <div className='navitems'>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </div>

        {menuOpen && (
        <div className='navbar_anchors_mobile'>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <hr/>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          <hr/>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar