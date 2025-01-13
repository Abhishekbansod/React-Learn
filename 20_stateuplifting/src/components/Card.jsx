import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type='text' onChange={(e) => {props.setName(e.target.value)}} />
      <p>value of name state inside the card/child {props.title} component :{props.name} </p>
    </div>
  )
}

export default Card
