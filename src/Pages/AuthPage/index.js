import React from 'react'
import Login from '../../Components/Login'
import SignUp from '../../Components/SignUp'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
const index = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
        
  )
}

export default index