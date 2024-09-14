import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router'

const DeleteItem = ({ item, index }) => {
  const [isOpen, setOpen] = useState(false)
  const navigate = useNavigate()
  const handleDelete = (e) => {
    e.preventDefault()

    fetch("http://localhost:8000/ItemData/" + item.id, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(null)
    }).then(response => response.json)
      .then(
        navigate("/")
      )
      setOpen(false)

  }
  return (
    <>
      <div className='border' onClick={() => setOpen(true)}>
        <MdDelete size={25} />
      </div>
      {
        isOpen &&
        <div className='border-2 bg-slate-800 flex flex-col gap-5 justify-start absolute z-10 text-white rounded-lg p-5'>
          <div>
            Are you sure you want to delete this item?
          </div>
          <div className='flex gap-3 w-full justify-end'>
            <div onClick={() => setOpen(false)} className='border-2 rounded-l-full rounded-r-full pt-2 pb-2 ps-5 pe-5 hover:cursor-pointer'>Cancel</div>
            <div onClick={handleDelete} className='bg-red-600 rounded-l-full rounded-r-full pt-2 pb-2 ps-5 pe-5 hover:cursor-pointer'>Delete</div>
          </div>
        </div>
      }
    </>
  )
}

export default DeleteItem
