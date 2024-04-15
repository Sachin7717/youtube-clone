

function Header() {


  return (
    <>
      <div className=" flex items-center justify-between h-16 text-2xl">
        <div className='flex items-center'>
      <i className="fa-solid fa-bars mx-2 "></i>
      <i className="fa-brands fa-youtube text-3xl text-red-500 mx-2"></i>
      <p className='text-red-600 font-bold'>Youtube</p>
      </div>
      <div className="search flex gap-x-2 items-center justify-center">
          <input type="text" name="" id="" placeholder='Search Youtube' className='text-xl h-12 w-96 border-2 border-gray-500 p-2xl rounded-3xl px-5'/>
          <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="otherIcon">
      <i class="fa-solid fa-video mx-4"></i>
      <i class="fa-regular fa-bell mx-4"></i>
      <i class="fa-solid fa-user mx-4"></i>
      </div>
      </div>
      
    </>
  )
}

export default Header
