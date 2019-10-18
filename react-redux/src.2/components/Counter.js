import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <h1>{props.foo}</h1>
      <h1>{props.count}</h1>

      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>asyncIncrement</button>
    </div>
  )
}

export default Counter