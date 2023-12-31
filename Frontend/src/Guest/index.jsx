import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup'
import Navigationbar from './components/Navigationbar'


export default function Guest() {
  
return (
<>

<Navigationbar/>
<Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="*" element={<Navigate to="/" replace={true} />} />
</Routes>
</>
  )
}
