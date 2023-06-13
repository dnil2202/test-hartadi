import React from 'react'
import { Data1 } from './helper'
import PinInput from "react-pin-input";
import { useUserContext } from '../../components/provider';

const FirsePage = () => {
  const {state, HandleFunctions} = useUserContext()
  const {setPinUser, dataUser, dataWalletUser}=state
  const {onTrade}=HandleFunctions
  
  console.log(dataUser)

  const totalWallet = () =>{
    let total = 0
    dataWalletUser.forEach(element => {
      total += element.total
    });
    return total
  }

  const printBox1 = () =>{
    return Data1.map((val,idx)=>{
      return(
        <div key={idx} className='w-[295px] h-[127px] bg-slate-100 ms-4 my-2'>
          <div className='m-8'>
            <div className='grid grid-cols-3'>
              <div className='w-14 h-14 bg-white rounded-md'>
                <div className={`flex justify-center my-2`}>
                  <val.img size={30} className={`${val.fill}`}/>
                </div>
              </div>
              <div className='col-span-2'>
                <p className='text-base font-bold leading-6'>{val.title}</p>
                <div className='flex gap-3'>
                  <p className='text-4xl font-bold leading-10'>{val.amount}</p>
                  <p className='text-sm text-[#7d7d7d] mt-5'>{val.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }


  return (
    <div>
      <div className='flex   gap-56'>
        <div className='w-[667px]  bg-white shadow-lg '>
            <div className='grid grid-cols-2 my-6' >
              {printBox1()}
            </div>
        </div>
        <div className='w-80 h-fit bg-white'>
          <div className='my-6'>
            {
              dataWalletUser.length <1 ? (
              <div className='mx-5 '>
                <p className='text-xl text-justify'>Silahkan Buka Brankas untuk transaki dan melihat saldo</p>
                <div>
                  <div className='flex justify-center mt-4'>
                  <PinInput
                length={4}
                focus
                type='numeric'
                onChange={(e)=>setPinUser(e)}
                />

                  </div>
                </div>
                <div>
                  <button onClick={onTrade} className='w-full bg-red-700 py-3 text-3xl mt-10'>Buka Brankas</button>
                </div>
              </div>

              )
              :
              <div>
                <p className='text-center'>Saldo Anda RP. {totalWallet().toLocaleString('ID')}</p>
              </div>
            }
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default FirsePage