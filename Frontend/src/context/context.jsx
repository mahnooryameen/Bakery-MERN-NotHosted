import React, { useEffect, useReducer } from 'react'
import { createContext } from 'react'
import { loginreducer } from './reducer'
import Cookies from 'js-cookie'
export const logincontext=createContext("initial value")

    const data={
        token: Cookies.get('token') || undefined,    //shru main ya to undefined hoga ya to jo cookiies se milega
    }


export default function LoginContextProvider({children}) {
    const [state,dispatch]=useReducer(loginreducer, data)



    //refresh karny per cookies ki value state.token se mil kr set hojayegi jo end per thi
useEffect(()=>{
  Cookies.set('token',state.token)
},[state.token])


  return (

    <logincontext.Provider value={{state,dispatch}}>
        {children}
    </logincontext.Provider>

    
  )
}
