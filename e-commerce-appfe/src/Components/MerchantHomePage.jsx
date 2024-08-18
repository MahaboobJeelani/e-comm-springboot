import React from 'react'
import ProductView from './ProductView'
import { Routes, Route } from 'react-router-dom'
import MerchantNavbar from './MerchantNavbar'
import UpdateMerchant from './UpdateMerchant'
import Addproducts from './Addproducts'
import EditProduct from './EditProduct'
import SingleProduct from './SingleProduct'
import UpdateProduct from './UpdateProduct'

const MerchantHomePage = () => {
  return (
    <div className='mhp'>
      <MerchantNavbar />
      <Routes>
        <Route path='/productView' element={<ProductView />} />
        <Route path='/updatemerchant' element={<UpdateMerchant />} />
        <Route path='/addproducts' element={<Addproducts />} />
        <Route path='/editproduct' element={<EditProduct />} />
        <Route path='/singleproduct' element={<SingleProduct />} />
        <Route path='/updateproduct/:id' element={<UpdateProduct />} />
      </Routes>
    </div>
  )
}

export default MerchantHomePage
