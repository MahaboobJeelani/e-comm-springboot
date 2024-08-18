import React from 'react'
import { Navigate } from 'react-router-dom'
import MerchantHomePage from './MerchantHomePage'

const Protect = ({ Child }) => {

  let x = localStorage.getItem("Merchant")

  let verifyprotect = () => {
    if (x == null) {
      return false
    }
    else {
      return true;
    }
  }

  return (
    <div>
      {verifyprotect() ? <Child /> : <Navigate to='/merchant' />}
    </div>
  )
}

export default Protect
