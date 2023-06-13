import {lazy} from 'react'

const Dashboard = lazy(()=>import('../../view/Dashboard'))

const DasboardRoute =[
  {
    path:'/home',
    element: <Dashboard/>,
  }
]

export default DasboardRoute