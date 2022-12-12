import React from 'react'
import "../css/Details.css"

export default function Details (props) {
  return (
    <div className='details-container'>
      {/* artikkelin sisältö tarkemmin */}
      <div>
        <h2>{props.title}</h2>
        <img src={props.image} className="details-img"></img>
        <p>Author: {props.author}</p>
        <h3>{props.description}</h3>
        <p>{props.content}</p>
      </div>
      {/* linkki takaisin artikkeleihin */}
      <div className='close-article-container'>
        <a href='#' className='close-article' onClick={props.close}>Back to articles</a>
        <a href={props.url} target="_blank" className='close-article' >link to the full article</a>
      </div>
    </div>
  )
}