import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
      <i className="fa-solid fa-bars"></i>
      <i className="fa-brands fa-youtube"></i>
      </div>
    </>
  )
}

export default App
