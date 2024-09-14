import React, { useEffect, useState } from 'react'
import { CgCloseR } from 'react-icons/cg';

const AddItem = ({ open, setOpen, setItem }) => {
    const [dataList, setDataList] = useState(null)
    let suggestiondata=[]

    // let filteredData = []
    let menuClass = open ? "" : "hidden";
    let suggestionClass = dataList == null ? "hidden" : "";

    fetch('http://localhost:8000/SuggestionData')
        .then(response => {
            return response.json();
        })
        .then(data => {
            suggestiondata=data;
            // console.log(suggestiondata);
        })
        .catch(error => {
            throw error;
        })
    // console.log(ItemData.length)
    // console.log(dataList)
    const handleChange = (e) => {
        // console.log(e.target.value)
        const data = e.target.value

        setDataList(suggestiondata.filter(x => x.name.startsWith(data)))

        // console.log(dataList)
        return dataList

    }
    
    const handleClick = (e) => {
        let ip_field = document.getElementById('item_name')
        ip_field.value = e
        setDataList(null)
        // console.log(ip_field.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(false);

        // console.log(price.value * quantity.value);
       
        

        fetch('http://localhost:8000/ItemData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'id': item_id.value,
                'name': item_name.value,
                'price': price.value,
                'quantity': quantity.value,
                'amount': price.value * quantity.value
            })
        }).then(response => response.json)


    }
   


    return (
        <>
            <div className={` ${menuClass}`}>
                < div className='w-full'>

                    <form className="flex justify-between" onSubmit={handleSubmit}>
                        <div className='w-1/5 flex justify-center items-center'>
                            <input type="number" name="item_id" id="item_id" className='focus:outline-none border-r-2 w-full' placeholder="id" required="" />
                        </div>

                        <div className='w-2/5 flex flex-col justify-center items-center relative'>
                            <input type="text" list='suggestion' onChange={handleChange} name="item_name" id="item_name" className='focus:outline-none border-r-2 w-full' placeholder="name" required="" />
                            <div id='suggestion' className={`absolute top-11 z-10 border-2 w-full flex justify-center items-center flex-col ${suggestionClass}`}>
                                {
                                    dataList && dataList.map((item, index) => (
                                        <div key={index} onClick={() => handleClick(item.name)}
                                            className='hover:cursor-pointer w-full flex text-center justify-center items-center border-b '
                                        >{item.name}</div>

                                    ))
                                }
                            </div>

                        </div>
                        <div className='w-1/5 flex justify-center items-center'>
                            <input type="number" name="price" id="price" className='focus:outline-none border-r-2 w-full' placeholder="price" required="" />
                        </div>
                        <div className='w-1/5 flex justify-center items-center'>
                            <input type="number" name="quantity" id="quantity" className='focus:outline-none border-r-2 w-full' placeholder="quantity" required="" />
                        </div>

                        <div className="w-1/5 flex justify-center items-center">
                            <button type="submit" className=" text-white w-full bg-violet-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>

                        </div>

                    </form>


                </div>
            </div>

        </>
    )
}

export default AddItem
