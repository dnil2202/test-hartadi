import React, { useState } from 'react'
import { useUserContext } from '../../components/provider'

const ModalTransactions = ({setOpenModal}) => {
    const {state , HandleFunctions}=useUserContext()
    const {totalCart, onPayment} = HandleFunctions
    const {total,dataCart, setDataCart}=state

    const [inputPayment, setInputPayment]=useState('')

    const printTransaction = () => {
        return dataCart.map((v,i)=>{
          return (
            <tr key={v.id} className={`${i%2 === 0 ?'bg-white':'bg-slate-100'}`}> 
              <td className='w-10 text-center'>{i+1}</td>
              <td className='w-1/2'>{v.name}</td>
              <td><img src={v.img} className='w-20'/></td>
              <td>RP. {Number(v.price*v.qty).toLocaleString('ID')}</td>
            </tr>
          )
        });
      };



    const printTotalCharge = () =>{
        if( totalCart() > Number(inputPayment)){
          return <p className='text-red-300'>Kembalian : Uang Kurang</p>
        }else{
          return <p className='text-green-500'>Kembalian : Rp. {(inputPayment-totalCart()).toLocaleString('id')}</p>
        }
  }

  return (
    <div >
        <div className='fixed inset-96 top-10 backdrop-blur-2xl z-50 w-1/2 bg-white shadow-2xl  px-4 py-2'>
            <div>
              <p className='mt-2'>Detail Pesanan</p>
            </div>
            <div className='grid grid-cols-3 gap-3 my-5'>
                <table className='w-full bg-slate-100  col-span-2 '>
                  <thead>
                    <tr className='h-12'>
                        <th>#</th>
                        <th className='text-start'>Nama</th>
                        <th className='text-start'>Foto</th>
                        <th className='text-start'>Harga</th>
                    </tr>
                  </thead>
                  <tbody className='w-full h-fit'>
                    {printTransaction()}
                  </tbody>
                </table>
                <div className='px-2 border-l-2 '>
                  <p className='text-center'>Uang Kembalian</p>
                  <input className='border border-slate-300 w-full mt-3' onChange={(e)=>setInputPayment(e.target.value)}/>
                  <div className='flex justify-center mt-5 gap-4'>
                    <button className='bg-red-600 text-white px-4 py-1' onClick={()=>setOpenModal(false)}>Close</button>
                    <button className='bg-teal-600 text-white px-4 py-1 disabled:bg-teal-300 disabled:cursor-not-allowed' disabled={totalCart()>inputPayment&&true } onClick={onPayment}>Pay</button>
                  </div>
                  <div className='mt-4'> 
                    <p>Total Belanja : Rp. {totalCart().toLocaleString('id')} </p>
                    <p>{printTotalCharge()}</p>
                  </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default ModalTransactions