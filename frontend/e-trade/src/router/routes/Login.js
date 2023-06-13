import {lazy} from 'react'

const LoginView = lazy(()=>import('../../view/Login'))

const LoginRoute =[
  {
    path:'/',
    element: <LoginView/>,
  }
]

export default LoginRoute