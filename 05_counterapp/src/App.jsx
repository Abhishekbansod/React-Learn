import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(20)

  // let counter = 20; //initiall way

  const increaseValue = () => {

    // below operation will increase the value by 1 only
    //react will consider below 4 operations as 1 single operation becuase of batching concept
    //that's why the value of counter will only be incresed by 1
    // react will consider all these batches as 1 single batch/operation
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)


    //below is the method for updating the value by +4
    // prev => gives the access of previous state & value counter in the previous state 
    // and +1 is added to the previous state value(in counter) at each operation
    // () => {}, callback returns the prev state and its values

    // setCounter( prev =>  prev + 1)
    // setCounter( prev =>  prev + 1)
    // setCounter( prev =>  prev + 1)
    // setCounter( prev =>  prev + 1)
    
    // console.log(counter);
    
  }

  const decreaseValue = () => {
    setCounter(counter - 1)
    // console.log(counter);
  }

  return (
    <>
      <h2>React basic project on Counter app {counter} </h2>
      <h3>Counter value : {counter} </h3>
      <button onClick={increaseValue} >Increase value</button> {" "}
      <button onClick={decreaseValue} >Decrease value</button>

      <h3>footer : {counter} </h3>
    </>
  )
}

export default App
