import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserNavBar from './UserNavBar'
import UpdateUser from './UpdateUser'
import SingleProduct from './SingleProduct'

const UserHomePage = () => {
  return (
    <div className='uhp'>

      <Routes>
        <Route path='/home' element={<UserNavBar />} />
        <Route path='/updateuser' element={<UpdateUser />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
      </Routes>
    </div>
  )
}

export default UserHomePage