import React from 'react'
import FormLogin from './Form'
import regisImg from '../../asset/mountains-7302806.jpg'

const LoginView = () => {
  return (
    <>
        <div className='lg:grid grid-cols-3 h-screen '>
            <img src={regisImg} className='h-full col-span-2 shadow-xl hidden lg:flex'/>
            <div className='bg-white drop-shadow-md'>
                <FormLogin/>
            </div>
        </div>
    </>
  )
}

export default LoginView