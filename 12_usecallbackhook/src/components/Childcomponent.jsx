import React from 'react'

const Childcomponent = React.memo(
    (props) => {
        console.log("child component got re-rendered")
      return (
        <div>
          <button onClick={props.onClick}>{props.buttonName}</button>
        </div>
      )
    }
);

export default Childcomponent
// React.memo => wrap => component => component re-render tabhi hoga jab props change hoga,
// nahi toh re-render nhi hoga 

// if you're sending a function from parent component to child via props, 
// then React.memo wont be able to save you from re-rendering of child component
// for that purpose we can use useCallback hook