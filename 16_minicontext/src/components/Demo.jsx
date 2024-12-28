import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Demo = () => {

    const {user} = useContext(UserContext)

    if(!user) return <h1>Inside demo</h1>

  return (
    <div>
      <h1>Demo Password: {user.password} </h1>
    </div>
  )
}

export default Demo
