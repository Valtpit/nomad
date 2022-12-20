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
      <div className='close-article-container'>
        {/* linkki takaisin artikkeleihin */}
        <a href='#' className='close-article' onClick={props.close}>Back to articles</a>
        {/* linkki uutisen omalle sivulle */}
        <a href={props.url} target="_blank" className='close-article' >link to the full article</a>
      </div>
    </div>
  )
}