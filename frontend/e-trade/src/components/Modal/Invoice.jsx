import React, { useState } from 'react'
import { useUserContext } from '../provider'

const Invoice = () => {

    const {state , HandleFunctions}=useUserContext()

    const{donePayment,setModalInvoice}=state

    const totalPayment = () =>{
        let total = 0
        donePayment.forEach((v,i)=>{
          total += Number(v.qty*v.price) 
        })
        return total
      };

    
  return (
    <div className='fixed inset-96 top-10 backdrop-blur-2xl z-50 w-1/2 h-fit bg-white shadow-2xl  px-4 py-2'>
        
        <p className='text-center font-bold'>Invoice</p>
        {
            donePayment.map((val,idx)=>{
                return(
                    <div key={idx}>
                        <div className='mx-10 mt-5'>
                            <div className='flex justify-around'>
                                <p>{val.name}</p>
                                <p>{val.price.toLocaleString('ID')}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        <div className='mt-5 flex justify-around border-t-2'>
            <p>Total</p>
            <p className='ml-14'>{totalPayment().toLocaleString('ID')}</p>
        </div>
        <div className='mt-5 flex justify-end'>
            <button className='bg-red-600 text-white px-4 py-1' onClick={()=>setModalInvoice(false)}>Close</button>
        </div>
    </div>
  )
}

export default Invoice