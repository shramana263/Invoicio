import React, { useEffect, useRef, useState } from 'react'
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import AddItem from './AddItem';

import EditItem from './EditItem';
import PartyDetails from './PartyDetails';
import CompanyDetails from './CompanyDetails';
import DeleteItem from './DeleteItem';
import Translate from './Translate';
import { MdDone } from 'react-icons/md';
import FileUpload from './FileUpload';




const Invoice = ({color1,color2}) => {
    const [item, setItem] = useState(null)
    const [open, setOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState('')

    const invoiceNoRef = useRef()

    const handleClick = () => {
        setOpen(true);
    }

    useEffect(() => {
        fetch('http://localhost:8000/ItemData')
            .then(response => {
                return response.json();
            })
            .then(data => {
                // console.log(data);
                setItem(data);
                const HelperTotal = item && item.reduce((total, i, cartItems) => {
                    //console.log(item.item.price, item.quantity)
                    return total += (parseFloat(i.price) * parseFloat(i.quantity))
                }, 0)
                setTotalPrice(prev => HelperTotal)
            })
            .catch(error => {
                throw error;
            })
    }, [item])




    return (
        <>
            <div className='flex justify-center items-center flex-col'>
                <div className='w-3/4 mt-5 shadow-lg'>
                    <div className='flex justify-between items-center font-bold font text-3xl text-orange-700 p-10 w-full  '
                        style={{ backgroundColor:color1 }}
                    
                    >
                        <div className='flex gap-10 items-center'>

                            <div className='flex justify-center items-center'><span><i>IN</i></span><span className='text-orange-200'>VOICE</span><span className='flex justify-center items-center'><LiaFileInvoiceSolid /></span></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center mt-7 ps-16 pe-16 w-full pb-5'>
                        <div className="flex justify-between text-lg font-bold mb-3 items-center">
                            <div className='flex gap-2 justify-center items-center'>
                                <span className='flex justify-center items-center'>Invoice No.:</span>
                                <span>
                                    <InvoiceNumber invoiceNoRef={invoiceNoRef} />
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='flex justify-center items-center'>Date:</span>
                                <span>
                                    <InvoiceDate/>
                                </span>
                            </div>
                        </div>
                        <div className='flex text-md font-bold mb-5'>
                            <div className="flex w-full justify-between">
                                <div className="flex justify-start">
                                    <AddParty />

                                </div>
                                <div className='flex justify-end right-0 items-center'>
                                    <AddCompany />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col text-md mb-5 p-3 '>
                            <div className='flex justify-between w-full mb-3 font-serif'
                            style={{ backgroundColor:color2 }}
                            >
                                <div className='w-1/5'>Item</div>
                                <div className='w-2/5'>Name</div>
                                <div className='w-1/5'>Price(Rs.)</div>
                                <div className='w-1/5'>Quantity</div>
                                <div className='w-1/5'>Amount(Rs.)</div>
                            </div>
                            {item && <Items item={item} />}

                            <AddItem open={open} setOpen={setOpen} setItem={setItem} />

                            <div className='flex justify-start pt-8 items-center noprint'>
                                <div className='border bg-violet-200 rounded-lg p-3 text-violet-800 font-semibold hover:cursor-pointer' onClick={() => handleClick()}>
                                    + Add Item
                                </div>
                            </div>

                        </div>

                        <div className='text-lg font-bold p-3 bg-orange-400 w-max text-white'>
                            <span>TOTAL:  </span>
                            <span className='text-red-800'>{totalPrice} Rs.</span>
                        </div>
                        <div className='flex gap-2 font-bold text-sm mt-5'>
                            <span>IN WORDS:</span>
                            <span>{totalPrice && <Translate totalPrice={totalPrice} />}</span>
                        </div>

                        <div className='flex justify-between ps-5 pe-8 items-center mt-10'>
                            <div className='flex flex-col justify-center'>
                                <h2 className='font-serif'><i>Thank you for your business</i></h2>
                                <h2>__________________________________________________</h2>
                            </div>

                            <div className='p-3 border overflow-hidden'>
                            <FileUpload/>
                                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKlgAl-fl8akcGQhi1f3AZ-Tx_k-zoWAhTh9P3SsaoEW4pex6xKsm9fVEIWY-NEr2HiA&usqp=CAU" alt="" className='h-full w-full' /> */}
                            </div>
                        </div>

                    </div>
                    <div className='flex bg-gray-800 text-white justify-center items-center h-8 text-[10px]'>
                        <div>Call:xxx-xxx-xxx | </div>
                        <div>www.companyname.com</div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Invoice

const AddParty = () => {
    const [partyData, setPartyData] = useState(null);

    // console.log(partyData)
    return (

        <>
            <div className='flex justify-center items-center'>
                <PartyDetails partyData={partyData} setPartyData={setPartyData} />
            </div>
            {partyData &&
                <div className='flex flex-col  p-3 text-sm  gap-3 font-thin justify-start '>

                    <div className="flex gap-2">
                        <span className='font-semibold'>Name:</span>
                        <span>{partyData.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className='font-semibold'>Address:</span>
                        <span>{partyData.address}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className='font-semibold'>Contact:</span>
                        <span>{partyData.contact}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className='font-semibold'>GST:</span>
                        <span>{partyData.gst}</span>
                    </div>
                </div>


            }

        </>
    )
}
const AddCompany = () => {
    const [companyData, setCompanyData] = useState(null);

    // console.log(partyData)
    return (

        <>
            <div className='flex justify-center items-center'>
                <CompanyDetails companyData={companyData} setCompanyData={setCompanyData} />
            </div>
            {companyData &&
                <div className='flex flex-col p-3 text-sm  gap-3 font-thin justify-start '>

                    <div className="flex gap-2">
                        <span className='font-semibold'>Name:</span>
                        <span>{companyData.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className='font-semibold'>Address:</span>
                        <span>{companyData.address}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className='font-semibold'>Contact:</span>
                        <span>{companyData.contact}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className='font-semibold'>GST:</span>
                        <span>{companyData.gst}</span>
                    </div>
                </div>


            }

        </>
    )
}


const Items = ({ item }) => {
    return (
        <>
            {
                item.map((item, index) => (
                    <div className='flex justify-between w-full mb-2 border-b-2 pb-2' key={index}>
                        <div className='w-1/5'>{item.id}</div>
                        <div className='w-2/5'>{item.name}</div>
                        <div className='w-1/5'>{item.price}</div>
                        <div className='w-1/5'>{item.quantity}</div>
                        <div className='w-1/5 flex justify-between items-center'>

                            <span>{item.price * item.quantity}</span>
                            <span className='flex gap-2 noprint'>
                                <EditItem item={item} index={index} />
                                <DeleteItem item={item} index={index} />
                            </span>

                        </div>

                    </div>
                ))
            }
        </>
    )
}

const InvoiceNumber = ({ invoiceNoRef }) => {
    const [openButton, setOpenButton] = useState(false)
    let buttonclass = openButton ? "" : "hidden"
    const [value, setValue] = useState('')
    const handleInvoiceNo = () => {
        setValue(invoiceNoRef.current.value)
        setOpenButton(false)
    }
    return (
        <>
            {!value && <input type="number" ref={invoiceNoRef} className='border-b-2 focus:outline-none ps-2' onChange={() => setOpenButton(true)} />}
            <button className={`border rounded-full bg-green-700 text-white ${buttonclass} z-10`} onClick={handleInvoiceNo}><MdDone size={25} /></button>
            {
                value && <div className='p-2 flex justify-center items-center'>
                    {value}
                </div>
            }
        </>
    )
}

const InvoiceDate = () => {
    const dateRef = useRef()
    const [openButton, setOpenButton] = useState(false)
    let buttonclass = openButton ? "" : "hidden"
    const [value, setValue] = useState('')

    const handleInvoiceDate=()=>{
        const date=dateRef.current.value
        setValue(date)
        setOpenButton(false)
    }

    return (
        <>
            {!value && <input type="date" ref={dateRef} onChange={() => setOpenButton(true)}/>}
            <button className={`border rounded-full bg-green-700 text-white ${buttonclass} z-10`} onClick={handleInvoiceDate}><MdDone size={25} /></button>
            {
                value && <div className='p-2 flex justify-center items-center'>
                    {value}
                </div>
            }
        </>

    )
}
