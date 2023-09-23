import React, { useState } from 'react'

const Nav = ({darkMode}) => {
    const [isDarkMode,setIsDarkMode]=useState(false)
  return (
    <>
      <div className='w-full flex justify-end p-4'>
        <button className='text-3xl h-fit text-white' onClick={()=>{setIsDarkMode(!isDarkMode); darkMode()}}>
            <i class={`fa-solid fa-${isDarkMode?'moon text-white':'sun text-orange-500'}`}></i>
        </button>
      </div>
    </>
  )
}

export default Nav
