import React from 'react'
import { useUserContext } from '../../components/provider'

const CartList = ({setOpenModal}) => {
    const {state , HandleFunctions}=useUserContext()
    const {getDataProduct, addToCart } = HandleFunctions
    const {dataProduct, setDataProduct, dataCart, setDataCart}=state

    const prinDataCart = () => {
        if(dataCart.length>0){
          return dataCart.map((v,i)=>{
            return (
              <div key={v.id} className='flex justify-between px-2 mt-2'>
                <img src={v.img} className='w-32'/>
                <p className='text-sm mt-5'>{v.name}</p>
                <div className='flex mt-5 gap-3'>
                  <p>{v.qty}x</p>
                  <p className='text-sky-400'>RP. {Number(v.price*v.qty).toLocaleString('ID')}</p>
                </div>
              </div>
            )
          });
        };
      };

  return (
    <div>
         <div className='bg-white shadow-xl h-fit'>
          <div className='mt-2 py-6'>
            <p className='text-center mb-5'>Pesanan</p>
            <div  >
              {prinDataCart()}
            </div>
            { dataCart.length >0 &&
            <div className='px-2 my-4'>
              <div className='flex justify-center'>
                <button className='border border-red-600 text-red-600 py-1 hover:bg-red-600 hover:text-white w-full' onClick={()=>setDataCart([])}>Clear Cart</button>
              </div>
              <div className='flex justify-center my-4'>
                <button className='border border-sky-600 text-sky-600 py-1 hover:bg-sky-600 hover:text-white w-full' onClick={()=>setOpenModal(true)}>Charge</button>
              </div>
            </div>
            }
          </div>
        </div>
    </div>
  )
}

export default CartList