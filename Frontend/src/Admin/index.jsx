import React from 'react'
import Sidebar from './components/Sidebar'
import Category from './pages/Category'
import Products from './pages/Products'
import Brands from './pages/Brands'
import { Routes, Route } from 'react-router-dom'

export default function Admin() {
  return (
  
    <div className="row">
      <div className="col-md-3 m-0 p-0 border border-secondary" style={{ height: '100vh' }}><Sidebar /></div>
      <div className="col-md-9">

        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/brands" element={<Brands />} />

          <Route path="*" element={<Category />} />
        </Routes>
      </div>
    </div>


    
  )
}
