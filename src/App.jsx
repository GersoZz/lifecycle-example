import { useState } from 'react'
import './App.css'
import Lifecycle from './components/Lifecycle'

function App() {
  const [show, setShow] = useState(true)
  console.log("🚀 ~ App ~ show:", show)

  return (
    <>
    <button className="counter"
      onClick={() => setShow(!show)}
    >
      Toggle
    </button>
    
    {show && <Lifecycle />}
    </>
  )
}

export default App
