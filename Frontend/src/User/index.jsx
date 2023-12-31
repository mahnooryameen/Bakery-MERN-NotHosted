import React from 'react'


// importing components, pages
import Home from './pages/Home'
import Categories from './pages/Categories'
import Brands from './pages/Brands'
import Products from './pages/Products'
import Profile from './pages/Profile'
import Navigationbar from './components/Navigationbar'
import SingleProductDynamic from './pages/SingleProductDynamic'
import SingleBrandDynamic from './pages/SingleBrandDynamic'
import Cart from './pages/Cart'
import Page404 from './pages/Page404'
import SingleCategoryDynamic from './pages/SingleCategoryDynamic'

//import routing 
import {Route,Routes} from 'react-router-dom'


export default function User() {
  return (
    <>
<Navigationbar/>    
<Routes>
     <Route path="/login" element={<Home />} />
     <Route path="/" element={<Home />} />


     <Route path="/products" element={<Products />} />
     <Route path="/get-product-by-id/:_id" element={<SingleProductDynamic />} />

     <Route path="/brands" element={<Brands />} />
     <Route path="/brands/:BrandName" element={<SingleBrandDynamic />} />

     <Route path="/categories" element={<Categories />} />
     <Route path="/category/:CategoryName" element={<SingleCategoryDynamic />} />



     <Route path="/profile" element={<Profile />} />
     
     <Route path="/cart" element={<Cart />} />


     {/* <Route path="*" element={<Page404 />} /> */}


     

</Routes> 




    
    </>
  )
}
