"use client"
import React ,{useState} from 'react'

const NavBar = () => {
  const [input ,setInput] =useState("") 
  const [mood ,setMood] =useState(true) // true mean dark mode

  const fetchData = (userName)=>{
    
  }


  {
    mood !=true ?  document.body.style = 'background: #ededed;' : document.body.style = '';
  }
  
  
  return (
    <div className={`${mood ? "":"bg-gray-200"} shadow-xl`}>
      <nav className={`container mx-auto py-6 flex justify-between items-center`}>
        <div className="flex gap-4 items-center ">
          <img src="../favicon.svg" alt="logo image" className='w-12' />
          <h1 className='font-bold  text-5xl text-white'><span className='text-blue-400'>Git</span>Finder</h1>
        </div>

        <div className="flex gap-4 items-center ">
          <input type="text"
            name='search'
            placeholder='Search by username'
            className={`bg-[#383b56]
                      text-white px-6 py-2 w-fit rounded-full text-lg outline-none
                      ${mood ? "":" bg-white text-[#383b56]"}`}
            onChange={((e)=> setInput(e.target.value))} />
            
          <button
            className='bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all'
            onClick={fetchData(input)}>
              Search
          </button>

          <button
            className='bg-[#383b56] text-white rounded-full w-[40px] h-[40px] p-2 hover:bg-[#27293a] transition-all'
            onClick={()=> {setMood(prev => !prev )}}>
            {(mood ?
              <img src="../sun (2).png" alt="" className='w-full text-white' />
              :<img src="../moon (1).png" alt="" className='w-full text-white' />
            )}
          </button>
        </div>
        
      </nav>
    </div>
  )
}

export default NavBar
