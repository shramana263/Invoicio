import React, { useEffect, useState } from 'react'

const Translate = ({totalPrice}) => {

    const [word, setWord]=useState('')
    // console.log(totalPrice)

    const single_digit = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
    const Tens=['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']
    const Tys=['Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety']


    // const amountInWords=()=>{
        // console.log(word)
        let text="";
        // let n= totalPrice
        useEffect(()=>{
            const translate=(n)=>{
                // console.log("n=",n)
                if(n<10){
                    text= single_digit[n]+' ';
                }
                else if(n<20){
                    text= Tens[n-10]+' ';
                }
                else if(n<100){
                    let rem= translate(n%10);
                    text= Tys[(n-(n%10))/10-2]+' '+rem;
                }
                else if(n<1000){
                    text= single_digit[Math.trunc(n/100)]+' Hundred '+translate(n%100);
                }
                else if(n<10000){
                    text=translate(Math.trunc(n/1000))+'Thousand '+ translate(n%1000);
                }
                else if(n<100000){
                    text=translate(Math.trunc(n/1000))+'Thousand '+translate(n%1000);
                }
    
                // console.log(text)
                setWord(text)
                return text
    
            }
            
            if(totalPrice===0){return 'Zero'}
            else{
               translate(totalPrice)
            }
        },[totalPrice])
        
       
        
       
        
    // }
    // console.log(word)

  return (
    <div className=''>
      {word} Rupees Only
    </div>
  )
}

export default Translate
