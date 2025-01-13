import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  // create state 
  // manage state
  // update state
  // sabhi child me state ko sync kra skte hai

  // setting the state for child componet ie card
  const [name, setName] = useState('')

  return (

    <div>
      <h1>State uplifting in React JS</h1>

      {/* passing values as props */}
      <Card title='card 1' name={name} setName = {setName} />
      <Card title = 'card 2' name={name} setName = {setName} />
      <p>name state value inside the app/parent component : {name} </p>
    </div>
  )
}

export default App
