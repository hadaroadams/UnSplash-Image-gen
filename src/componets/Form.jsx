import React, { useState } from 'react'

const Form = ({searchImage}) => {
    
  return (
    <div className=' w-full'>
      <h1 className='text-center text-4xl text-[#645CFF]'>Unsplash Images</h1>
      <form action=""  onSubmit={searchImage} className='mx-auto w-fit mt-10 flex text-2xl text-white'>
        <input type="text"  className='bg-transparent border w-full' name='search'/>
        <button className='bg-[#645CFF] py-2 px-4 '>search</button>
      </form>
    </div>
  )
}

export default Form
