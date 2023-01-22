import React from 'react'
import menuUrl from '../assets/menu-3-line.svg'


function Navbar() {
  return (
    <nav>
      <div></div>
      <button>
        <img src={menuUrl}/>
      </button>
    </nav>
  )
}

export default Navbar