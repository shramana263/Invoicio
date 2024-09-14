import React, { useState } from 'react'

const PartyDetails = ({partyData, setPartyData}) => {
    const [isOpen, setOpen]= useState(false)
    const [buttonClass, setButtonClass]= useState('')

    const partySubmit = (e) => {
        e.preventDefault()
        const payload = {
            'name': party_name.value,
            'address': address.value,
            'contact': contact.value,
            'gst': gst.value
        }
        // console.log(payload)
        setButtonClass("hidden") 
        setPartyData(payload)
        setOpen(false)
        // console.log(partyData)
    }

    return (
        <>
            <button onClick={()=>{setOpen(true);}} className={`border rounded-lg text-violet-800 bg-violet-200 p-3 ${buttonClass}`}> + Add Party</button>
            { isOpen &&
                <section className="bg-gray-50 dark:bg-gray-900/10 z-10 absolute w-full h-full top-0 left-0">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Enter Party Details
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={partySubmit}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Party Name</label>
                                    <input type="text" name="party_name" id="party_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Party address</label>
                                    <input type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact no.</label>
                                    <input type="number" name="contact" id="contact" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxxx-xxxxx" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GST no.</label>
                                    <input type="number" name="gst" id="gst" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="gst no." required="" />
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

export default PartyDetails
