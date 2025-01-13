import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from '../features/counter/counterSlice'

function App() {
  const [amount, setAmount] = useState(0)

  // fetching the value/data from store/counterSlice of counter
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrement(){
    dispatch(increment())
  }

  function handleDecrement(){
    dispatch(decrement())
  }

  function handleReset(){
    dispatch(reset())
  }

  function handleIncByAmount(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <button onClick={handleIncrement} > + </button>
      <p>Count : {count} </p>
      <button onClick={handleDecrement}> - </button> <br /> <br />
      <button onClick={handleReset} >Reset Count</button> <br /><br />

      <input 
      type="number"
      value={amount}
      placeholder='Enter Amount'
      onChange={(e) => {setAmount(e.target.value)}} />
      <button onClick={handleIncByAmount} >Increment by Amount</button>
    </div>
    
  )
}

export default App
