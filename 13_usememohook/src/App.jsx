import { useState, useMemo } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)
 
  function heavyTask(number){
    console.log("inside heavy task");
    for(let i = 0; i < 1000000000; i++){}
      return number * 2
  }

  // using useMemo
  let doubleNumber = useMemo(() => heavyTask(input), [input])
 
  return (
    <div>

      <div>
        count : {count}
      </div>  

          <br />

      <div>
        <button onClick={() => setCount(count + 1)} >Increment</button>
      </div>

      <input 
      type="number" 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      name="" 
      id="" />

      <div>
        double value : {doubleNumber}
      </div>
    </div>
  )
}

export default App
