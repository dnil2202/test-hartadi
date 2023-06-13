import {lazy} from 'react'

const ProductView = lazy(()=>import('../../view/Product'))

const ProductRoute =[
  {
    path:'/product',
    element: <ProductView/>,
  }
]

export default ProductRoute