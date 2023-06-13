import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { menuNavbar } from '../helper/menuNavbar';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({dataWallet, dataUser,setDataWalletUser}) => {

    const navigate =useNavigate()
    const [open, setOpen]=useState(false)

    const onLogout = ()=>{
        localStorage.removeItem('etrade')
        localStorage.removeItem('epin')
        setDataWalletUser([])
        navigate('/')

    }


return (
    <div className='hidden sm:block'>
        <div 
        className={`${open ? "w-60" : "w-28"} p-5 pt-8 h-screen bg-white shadow-lg relative duration-500`}
        >
            <IoIosArrowBack 
            size={30}
            className={`absolute -right-3 rounded-full cursor-pointer top-9 border-2 duration-300 bg-white  ${!open && "rotate-180"} ring-2 ring-teal-200`}
            onClick={() => setOpen(!open)} 
            />
        <div className='flex gap-x-3 items-center'>
        <span 
        className={`cursor-pointer origin-center bg-gradient-to-r from-green-500 to-blue-600 text-2xl text-transparent font-extrabold bg-clip-text ${!open && "hidden"}`}
        >
        Hello
        </span>
            <button 
            className={`bg-sky-500 px-3 py-2 rounded-lg font-bold text-white hover:bg-red-400 ${!open && 'hidden'}`} onClick={onLogout}
            >
            Logout
            </button>
        </div>
        <p className='ml-1 font-bold'>{dataUser.fullname}</p>
        <ul className='pt-16 mx-1'>
            {
                menuNavbar.map((item,index)=>{
                    return(
                        <>
                            <li 
                            onClick={()=>navigate(item.path)}
                            key={item.id}
                            className={`font-semibold text-xl flex items-center gap-x-4 cursor-pointer hover:bg-slate-300 rounded-md mt-5`}
                            >
                                <item.icons size={30} className={`duration-300 ${open && "rotate-[360deg]"}`}/>
                                <span className={`${!open && 'hidden'}`}>{item.name}</span>
                            </li>
                        </>
                    )
                })
            }
        </ul>
    </div>
</div>
  )
}

export default Sidebar