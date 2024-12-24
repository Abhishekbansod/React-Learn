import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(5)
  const [total, setTotal] = useState(10)
  // useEffect hook syntax
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])

  // first => side effect fuction
  // second => clean-up function
  // third => comma separated dependencies list

  // variation 1:
  // runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  // variation 2:
  // runs on only first render
  // useEffect(() => {
  //   alert("I will run on only 1st render")
  // }, [])

  // variation 3:
  // runs everytime when dependency array value is changed
  // useEffect(() => {
  //   alert("I will run everytime whenever counter value is updated")
  // }, [counter])

  // variation 4:
  // multiple dependencies
  // useEffect( () => {
  //   alert("I will update everytime whenever counter/total value is updated")
  // }, [counter, total])

  // variation 5:
  // adding the clean-up function => which runs when prev state value is unmounted
  // useEffect(() => {
  //   alert("count is updated!")
  
  //   // clean-up function
  //   // it runs when the previous state value of counter is changed/unmount 
  //   return () => {
  //     alert("counter is unmounted from Ui")
  //   }
  // }, [counter])
  

  return (
    <div>
      {/* below codes needs to be commented in order to check/render other components in src(eg of useEffect) */}

      <button onClick={() => setCounter(counter + 1)} >update counter</button>
      <br />
      <span>Counter is : {counter} </span>

      <br />

      <button onClick={() => setTotal(total + 1)} >update total</button>
      <br />
      <span>Total is : {total} </span>
    </div>
  )
}

export default App
