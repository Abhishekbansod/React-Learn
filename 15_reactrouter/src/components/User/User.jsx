import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    // took the userId from main.jsx as params via useParams() method
    const {userid} = useParams()

  return (
    <div className='bg-orange-700 p-5 text-center text-3xl
    text-white font-semibold'>User : {userid} </div>
  )
}

export default User
