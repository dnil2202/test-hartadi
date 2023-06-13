import React,{useState} from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useUserContext } from '../../components/provider';




const FormLogin = () => {

    const {state, HandleFunctions}=useUserContext()

    const {setEmail, setPassword}=state
    const {onLogin}=HandleFunctions

    const [visible,setVisible]=useState('password')
    const [message, setMessage]=useState('')

    const showPass = ()=>{
    if(visible=="password"){
        setVisible("text")
    }else if(visible=="text"){
        setVisible("password")
    }
    }

    

return (
    <div>
        <div className='px-3 py-5 '>
            <div className='lg:px-10'>
                <div className='font-bold text-2xl font-Public'>Login</div>
                <div className='text-sm font-extralight text-gray-400 font-Public'>Don't have account ?
                    <span className='ml-2 underline text-teal-500 hover:text-teal-600 text-sm font-bold font-Public'>Sign Up</span>
                </div>
                <form>
                    <label className='block mb-3 my-14'>
                        <span className='block text-sm font-medium text-gray-700 font-Public'>
                            Email/Username
                        </span>
                        <input type='email' onChange={(e)=>setEmail(e.target.value)} className='mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 '/>
                    </label>
                    <label className='block'>
                        <span className='block text-sm font-medium text-gray-700 font-Public'>
                            Password
                        </span>
                        <div className='relative'>
                            <input type={visible} onChange={(e)=>setPassword(e.target.value)} className='mt-1 px-3 py-2  bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1'/>
                            {
                            visible === 'password'
                            ?
                            <BsEye onClick={showPass} size={20} className='absolute top-2 right-3' />
                            :
                            <BsEyeSlash onClick={showPass} size={20} className='absolute top-2 right-3' />
                            }
                        </div>
                    </label>
                </form>
                <div className='grid grid-cols-2 my-7'>
                    <div className='flex justify-start'>
                        <input type={'checkbox'}/>
                        <div className='ml-3 text-sm font-Public'>Remember me</div>
                    </div>
                </div>
                    <div className='h-20'>
                        <p className='text-red-600 text-center leading-7'>{message}</p>
                    </div>
                <button className='text-white rounded-md bg-teal-500 hover:bg-teal-600 w-full py-2 mt-5 font-Public' onClick={onLogin}>Login</button>
            </div>
        </div>
    </div>
)
}

export default FormLogin