import React, { useRef, useState } from 'react'

const FileUpload = () => {
    const[image, setImage]=useState(null)

    const fileRef=useRef();

    const handleClick=()=>{
        console.log(fileRef.current.value)
        setImage(fileRef.current.value)
    }

    return (
        <>
            <div>
                <input type="file" ref={fileRef}/>
                <div className='border p-2 bg-green-700 text-white' onClick={handleClick}>Upload</div>
            </div>
            {
                image && 
                <div>
                    <img src={image} alt="" />
                </div>
            }
        </>
    )
}

export default FileUpload
