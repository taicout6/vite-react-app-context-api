import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <span>
        <b>Count: </b>
        { count }
      </span>
      <br />
      <button onClick={ () => setCount(count + 1) }>
        Increase
      </button>
    </div>
  )
}