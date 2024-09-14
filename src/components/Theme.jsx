import React from 'react'

const Theme = ({themes, setSelectedTheme}) => {
    const handleClick=(index)=>{
        setSelectedTheme(index)
    }
  return (
    <>
        <div className='h-40 w-36 flex justify-center items-center border gap-2 animate-popCell'>
            {/* <h2>Themes</h2> */}
            <div className='h-full w-full flex justify-center items-center flex-col bg-slate-500/10 '>
                {
                    themes && themes.map((theme, index)=>(
                        <div key={index} className='flex justify-center items-center pt-1 pb-1 ps-4 pe-4 gap-4 border hover:cursor-pointer'
                            onClick={()=>handleClick(index)}
                        >
                            
                            <div className={`h-8 w-8 border-2 m-1 border-black rounded-full`} 
                            style={{ 
                                backgroundColor: theme.color1
                             }}></div>
                            
                            <div className={`h-8 w-8 border-2 m-1 border-black rounded-full`} 
                            style={{ 
                                backgroundColor: theme.color2
                             }}></div>
                        </div>
                    ))
                }
            </div>
        </div> 
    </>
  )
}

export default Theme
