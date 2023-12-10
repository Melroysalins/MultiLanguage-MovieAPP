import React, { useEffect } from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import Profile from './utils/Profile'
import Shimmer from './utils/Shimmer'
import MovieInfoPage from './utils/MovieInfoPage'


import { auth } from './utils/FireBase'
import { useDispatch } from 'react-redux'
import { adduserinfo, removeuser } from './UserSlice'

const Body = () => {

const dispatch = useDispatch();



 
  

  return (
    <div>
       <RouterProvider router={approuter}></RouterProvider>
    </div>
  )
}

const approuter = createBrowserRouter([
  {
      path:"/",
      element:<Login/>
  },{
    path : "/browse",
    element:<Browse/>
  },{

    path: "/profile",
    element: <Profile/>
  },
  {
    path:"/movieinfo/:movieid",
    element:<MovieInfoPage/>
  }
 
])

export default Body