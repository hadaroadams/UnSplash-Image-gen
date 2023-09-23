import { useEffect, useState } from 'react'
import './App.css'
import Nav from './componets/Nav'
import Form from './componets/Form'
import Image from './componets/Image'

// const url = `
//   https://api.unsplash.com/photos/?client_id=Vb2nf41oF6SbInOGCUInYDi063dT7nro-mNBB246vzc&query=cat
// `

function App() {
const [imageType,setImageType]=useState('cat')
const [darkMode,setDarkMode]= useState('light')
const [data ,setData] = useState([])

const url = `
  https://api.unsplash.com/search/photos/?client_id=Vb2nf41oF6SbInOGCUInYDi063dT7nro-mNBB246vzc&query=${imageType}`

useEffect(()=>{
  datafetch()
},[imageType])

useEffect(()=>{
   if(darkMode=="dark"){
      document.body.classList.add('dark')
   }else{
    document.body.classList.remove('dark')
   }
},[darkMode])

const toggleDarkMode =()=>{
    darkMode=='light'?setDarkMode('dark'):setDarkMode('light')
}

const searchImage = (e)=>{
        e.preventDefault()
        setImageType(e.target.search.value)
        console.log()
}

const  datafetch = async()=>{
  try{
  const data = await fetch(url)
  const newData = await data.json()
  
  setData(newData.results)

  }catch(error){
    console.log(error)
  }
}

console.log(data)

  return (
    <>
      <div className='dark:bg-[#333333] min-h-screen pb-20'>
        <Nav darkMode={toggleDarkMode}/>
        <Form searchImage={searchImage}/>
        <div className='grid  md:grid-cols-2 lg:grid-cols-3'>
          {
            data.map((item,index)=>{
              const {small} = item.urls
              return(
                <Image full={small} key={index}/>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default App
