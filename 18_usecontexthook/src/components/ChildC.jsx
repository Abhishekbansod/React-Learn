import React, { useContext } from 'react'
import { UserContext } from '../App'

const ChildC = () => {

    const data = useContext(UserContext)

  return (
    <div>
      hello from Child C
      <h2>username :{data.username} </h2>
      <h2>username :{data.password} </h2>
    </div>
  )
}

export default ChildC;
