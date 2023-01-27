import React from 'react'
import menuUrl from '../assets/menu-3-line.svg'


function Navbar() {
  return (
    <nav>
      {/* mobile nav */}
      <div className="mobile-nav">
        <div></div>
      <button>
        <img src={menuUrl}/>
      </button>
      </div>

      {/* desktop and tablet nav */}
      <div className="desktop-nav">
        <ul>
          <li>
            <a href="#header">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar