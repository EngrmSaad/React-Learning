import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }
  const subValue = () => { 
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  const rstValue = () => { 
    setCounter(0)
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>
      <button id='inc' onClick={addValue}>Increase Value</button>
      <br />
      <button id='dec' onClick={subValue}>Decrease Value</button>
      <br />
      <button id='rst' onClick={rstValue}>Reset Value</button>
    </>
  )
}

export default App
