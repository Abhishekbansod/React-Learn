import React from 'react'
import { useState } from 'react'


const ExpensiveComponent = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const expensiveCalculation = () => {
        console.log("running expensive calculation");
        let result = 0;
        for(let i = 0; i < 100000000; i++){
            result += i
        }
        return result  
    }


    return (
        <div>
            <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='type something here' />

            <p>Expensive Calculation Result : {expensiveCalculation()} </p>

            <button onClick={() => setCount(count + 1)} >Increment</button>
        </div>
    )
}

export default ExpensiveComponent
