import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username, password})
    }

  return (
    <div>
      <h1>Login Component</h1>

      {/* for username */}
      <input 
       type="text"
       value={username}
       placeholder='username'
       onChange={(e) => {setUsername(e.target.value)}} />

       {" "}

       {/* for password */}
       <input 
        type="password"
        value={password}
        placeholder='password'
        onChange={(e) => {setPassword(e.target.value)}} />

        {/* button */}
        <button onClick={handleSubmit} >Submit</button>

    </div>
  )
}

export default Login
