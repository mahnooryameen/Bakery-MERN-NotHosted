import React, { useContext, useState } from 'react'
import { logincontext } from './context/context'
import {decodeToken} from 'react-jwt'
import Footer from './User/components/Footer'


//components for roles
import Admin from './Admin'  
import User from './User'  //is component main jo index.jsx hogi wo isky liye as a home page ayegi 
import Guest from './Guest'


 // yeh humny bata diya k konsa component kab dena ha, NOTE: yeh humny app.jsx ka function k bahar bata diya
 const ComponentByRole = {
  'admin': Admin,
  'user':User,
  'guest':Guest,
  
} 


//function for getting component according to current user..............kisi object main key de kr value leny ka tareeka [key]
// hamain DB se admin and user k illawa to kuch milega nahi toh hum guest k liye banayengy case k inky illawa jo bhi aye wo guest
const getUserRole=(params)=>ComponentByRole[params] || ComponentByRole['guest']

const getDecodeToken = (token)=> {
  if (!token) {
    return undefined
  }
  else {
    const res = decodeToken(token)
    return res?.Role
  }
}

export default function App() {

const {state,dispatch}=useContext(logincontext)
// ek function banayengy jismain batayengy k token ko decode tab hi karo jab token ho
const CurrentToken = getDecodeToken(state.token)

const CurrentUser = getUserRole(CurrentToken)  //ismain getuserrole ka function chal kr component arahy 
  return (
    <>
    <CurrentUser/>
    <Footer/>
    </>
  )
}
