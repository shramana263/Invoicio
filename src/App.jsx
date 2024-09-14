import React, { useEffect, useRef, useState } from 'react'
import Invoice from './components/Invoice'
import ReactToPrint from 'react-to-print'
import Theme from './components/Theme'

const themes=[
  {
      index:0,
      color1:"#341513",
      color2:"#C6FFDC",
  },
  {
      index:1,
      color1:"#37104A",
      color2:"#ECE4FF"
  },
  {
    index:2,
      color1:"#401D2C",
      color2:"#FFAAA5"
  }
]

const App = () => {
  const componentRef = useRef()
  const [isOpen, setOpen]= useState(false)
  const [selectedTheme, setSelectedTheme]=useState(0)
  const [themeObject,setThemeObject]=useState(null)

  useEffect(()=>{
    console.log(selectedTheme)
    const TempthemeObject= themes.find(x=>x.index===selectedTheme)
    setThemeObject(prev=>TempthemeObject) 
    console.log(themeObject)
  },[selectedTheme])


  const handlePrint = () => {
    window.print()
  }
  return (
    <>
    <div className='flex justify-between w-full'>

      <div className='flex justify-start pt-5 ps-5'>
        <div className='flex justify-center items-center border p-2 rounded bg-green-700 text-white hover:cursor-pointer' onClick={()=>setOpen(prev=>!prev)}>Choose Theme</div>
        {
          isOpen && 
          <div className='absolute top-20 '>

            <Theme themes={themes} setSelectedTheme={setSelectedTheme}/>
          </div>
        }
      </div>
      <div className='flex justify-end pt-5 pe-5'> 
        <ReactToPrint trigger={() => (

          <button className='rounded-lg border-2 bg-red-700 text-white p-3'>Print/Download Invoice</button>

        )} content={()=>componentRef.current}/>
      </div>
    </div>
      

<div ref={componentRef}>
  {
    themeObject &&
  <Invoice color1={themeObject.color1} color2={themeObject.color2}/>
  }
</div>

      
    </>
  )
}

export default App
