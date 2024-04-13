import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" flex items-center justify-between">
        <div className='flex items-center'>
      <i className="fa-solid fa-bars mx-2 text-xl"></i>
      <i className="fa-brands fa-youtube text-3xl text-red-500 mx-2"></i>
      <p className='text-red-600 text-xl font-bold'>Youtube</p>
      </div>
      <div className="search flex gap-x-2 items-center justify-center">
          <input type="text" name="" id="" placeholder='sky' className='h-8 w-96 border-black p-2 rounded-10'/>
          <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="otherIcon"></div>
      </div>
    </>
  )
}

export default App
