import React, { useState } from 'react'
import { MdEditNote } from 'react-icons/md'
import { Navigate, useNavigate } from 'react-router'

const EditItem = ({ item }) => {
    const [open, setOpen] = useState(false)
    // console.log(item.id)
    const [editData,setEditData]=useState(item)
    const navigate =useNavigate()

    const handleEdit=(e)=>{
        e.preventDefault()
        // console.log(editData);
        // console.log(first)
        
        fetch("http://localhost:8000/ItemData/"+ item.id,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(editData)
        }).then(response => response.json)
        .then(
            navigate("/")
        )

        setOpen(false)
    }

    return (
        <>
            <button className='border rounded ' onClick={() => setOpen(true)}><MdEditNote size={25} /></button>
            {open &&
                <section className={`bg-gray-50 dark:bg-gray-900/20 absolute backdrop-blur h-full w-full top-0 left-0 `}>
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 border border-gray-200">


                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                                <div className="flex justify-between w-full p-3 ">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Edit Item
                                    </h1>
                                    <button className='border p-3 h-8 flex justify-center items-center text-white' onClick={() => setOpen(false)}>x</button>
                                </div>

                                <form className="space-y-4 md:space-y-6" onSubmit={handleEdit}>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text" name="item_name" 
                                         defaultValue={item.name} 
                                         onChange={(e)=>setEditData(prev=>({...prev,name:e.target.value}))}
                                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                        <input type="number" name="price" 
                                         defaultValue={item.price} 
                                         onChange={(e)=>setEditData(prev=>({...prev,price:e.target.value}))}
                                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address" required="" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                                        <input type="number" name="quantity" 
                                        defaultValue={item.quantity} 
                                        onChange={(e)=>setEditData(prev=>({...prev,quantity:e.target.value}))}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxxx-xxxxx" required="" />
                                    </div>
                                    
                                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default EditItem
