import React, { useEffect, useState } from 'react'
import { useUserContext } from '../../components/provider'
import CartList from './CartList'
import ModalTransactions from './ModalTransactions'
import Invoice from '../../components/Modal/Invoice'


const ProductList = () => {
    const {state , HandleFunctions}=useUserContext()
    const {getDataProduct, addToCart } = HandleFunctions
    const {dataProduct, dataWalletUser,dataCart,openModal,setOpenModal,modalInvoice,setModalInvoice}=state

    useEffect(()=>{
        getDataProduct()
    },[])


    const PrintDataProduct = () =>{
        return dataProduct.map((item,idx)=>(
            <div key={item.id} className='w-60 bg-white h-60 my-2 shadow-md'>
            <div onClick={()=>addToCart(item.id)}>
              <img src={item.img} className='w-full h-44'/>
              <div className='text-center'>
                <p>{item.name}</p>
                <p className='text-sky-400'>RP. {Number(item.price).toLocaleString('ID')}</p>
              </div>
            </div>
    
          </div>
        ))
    }

    return (
        <div className='flex gap-4 '>
            {
                dataWalletUser.length > 0 ?
                <>
                <div className='w-[800px] bg-white shadow-lg'>
                    <div className='m-10 grid grid-cols-3 gap-10'>
                    {PrintDataProduct()}
                    </div>
                </div>
                <div className={`${dataCart.length==0&&'hidden'}`}>
                    <CartList setOpenModal={setOpenModal}/>
                </div>
                
                </>
                :
                <>
                <p>Silahkan Masukan Verifikasi Pin Anda</p>
                </>
            }
            {
                modalInvoice &&
                <>
            <Invoice/>
                </>
            }
                    {
            openModal &&(
                <>
                <ModalTransactions setOpenModal={setOpenModal}/>
                </>
            )
            }
        </div>
      )
}

export default ProductList