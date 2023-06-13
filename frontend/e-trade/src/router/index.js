import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AllRoutes from './routes'
import Layouts from '../layouts'
import { UserWrapper} from '../components/provider'
import api from '../api'
import LoginRoute from './routes/Login'
import Login from '../view/Login'

const Router = () => {

    const getAllRoute = ()=>{
        if(AllRoutes){
          return AllRoutes.map((routes,i)=>{
            return (
              <>
                  <Route 
                  key={i}
                  path={routes.path} 
                  element={
                    routes.element=(
                      <Layouts>
                        <Suspense fallback={null}>{routes.element}</Suspense>
                      </Layouts>
                    )
                  }
                  />
              </>
            )
          })
        }
      }

  return (
    <Routes>
      <Route path='/' element={<Login/>} />
        {getAllRoute()}
    </Routes>
  )
}

export default Router