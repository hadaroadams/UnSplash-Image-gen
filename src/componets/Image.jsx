import React from 'react'
import logo from './../assets/download.jpeg'
const Image = ({full}) => {
  return (
    <article className='w-full mt-10 px-10'>
      <img src={full} alt="" className='w-full h-48'/>
    </article>
  )
}

export default Image
