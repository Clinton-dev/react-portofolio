import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div id="footer" className='gradient'>
      <div>
      Footer
      </div>
      <p>Designed and developed by clinton wambugu &#169; {currentYear}</p>
    </div>
  )
}

export default Footer