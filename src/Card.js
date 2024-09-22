import React from 'react'
import './Card.css'

const Card = (props) => {
    return(
        <div className='Card'>
            <h1 className='Card-title'>
                {props.title}
            </h1>
            <p className='Card-text'>
                {props.text}
            </p>
        </div>
    )
}

export default Card