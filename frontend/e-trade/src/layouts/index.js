import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { useUserContext } from '../components/provider'
import api from '../api'

const Layouts = ({children}) => {
  const {state,HandleFunctions}=useUserContext()
  const {keepLogin, keepDataWallet, onTrade}=HandleFunctions
  const {dataUser,dataWalletUser,setDataWalletUser}=state

  let pinLog = localStorage.getItem('epin')
  
  useEffect(()=>{
    if(localStorage.getItem('etrade')){

      keepLogin()
    }
  },[])

  const keepWallet = async () =>{
    let pinWallet = Number(pinLog)
    try {
        let res = await api.openTrade({pinWallet})
        setDataWalletUser(res.data.data)
        localStorage.setItem('epin',pinWallet)
        } catch (error) {
        console.log(error)
        }
  }

  useEffect(() => {
    keepWallet()
},[]);

  return (
    <div className='flex gap-12 bg-slate-50 '>
        <Sidebar dataWallet={dataWalletUser} dataUser={dataUser} setDataWalletUser={setDataWalletUser}/>
      <div className='mt-10'>
        {children}

      </div>
    </div>
  )
}

export default Layouts