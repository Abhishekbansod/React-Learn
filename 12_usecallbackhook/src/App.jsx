import { useState } from 'react'
import './App.css'
import Childcomponent from './components/Childcomponent'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback( () => {
    setCount(count + 1)
  }, [count])

  return (
    <div>

      <div>Count : {count} </div> <br />

      <div>
        <button onClick={handleClick} >Increment</button>
      </div>

      <br />

      <div>
        <Childcomponent buttonName = "Click Me" onClick = {handleClick} />
      </div>

    </div>
  )
}

export default App

