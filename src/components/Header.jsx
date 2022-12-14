import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Header.css"

function Header() {
  return (
    <div id="menu">
      {/* Sivun nimi */}
      <div className='site-name'>
        <p>News Site</p>
      </div>
      {/* sivun linkit */}
      <div id="menu-items">
          <Link className='menu-item' to="/" >Home</Link>
          <Link className='menu-item' to="TopHeadlines">Top Headlines</Link>
      </div>
    </div>
  )
}

export default Header