import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
  }

  const removeValue = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter: { count }</h1>
      <button onClick={addValue}>Add</button>
      <br/>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
