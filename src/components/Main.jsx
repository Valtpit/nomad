import React from 'react'
import {Routes, Route} from "react-router-dom"

import Header from "./Header"
import Home from "./Home"
import TopHeadlines from './TopHeadlines'


function Main() {
  return (
    /* hoitaa sivunen linkityksen */
    <React.Fragment>
        {/* yläpalkki */}
        <Header/>
        {/* sivut */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/TopHeadlines" element={<TopHeadlines/>} />
        </Routes>
    </React.Fragment>
  )
}

export default Main