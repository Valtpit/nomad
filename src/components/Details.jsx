import React from 'react'

export default function Details (props) {
  return (
    <div>
    
        {/* linkki takaisin artikkeleihin */}
        <div>
            <a href='#' onClick={props.close}>
            Back to the first page
            </a>
        </div>

        {/* artikkelin sisältö tarkemmin */}
        <div>
            <h3>{props.title}</h3>
            <p>Author: {props.author}</p>
            <img src={props.image}></img>
            <p>{props.description}</p>
        </div>

    </div>
  )
}