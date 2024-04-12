import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" flex items-center">
      <i className="fa-solid fa-bars mx-2 text-xl"></i>
      <i className="fa-brands fa-youtube text-3xl text-red-500 mx-2"></i>
      <h2 text-red-500>Youtube</h2>

      </div>
    </>
  )
}

export default App
