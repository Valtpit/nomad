import React from 'react'

import "../css/Home.css"

function Home() {
    
  return (
    <div>
        <div className='text-background'>
          <div className='home-text'>
            <h2>Welcome to News Site</h2>
            <p>This site uses NewsApi to show news articles from different countries. You can choose the articles category.</p>
          </div>
        </div>
        <div id="background-pattern"></div>
    </div>
    
  )
}

export default Home