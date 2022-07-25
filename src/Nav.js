import React from 'react'
import Addcart from './Addcart'
import Favoraties from './Favoraties'
import End from "./End"
import  "./App.css"
import Home from "./Home"
 import {BrowserRouter,Routes,Route, NavLink} from "react-router-dom"
function Nav() {

  return (
    <div> 
    <BrowserRouter>
    <ul className='nav'>
    <li>
    <NavLink to={'/Home'} style={({isActive})=>isActive ? {color:'red'}: null}>Home</NavLink></li>
   <li> <NavLink to={'/Favoraties'} style={({isActive})=>isActive ? {color:'red'}: null}>Favoraties</NavLink></li>
    <li><NavLink to={'/Addcart'} style={({isActive})=>isActive ? {color:'red'}: null}>Addcart</NavLink></li>
    <li><NavLink to={'/Front'}style={({isActive})=>isActive ? {color:'red'}: null}>logout</NavLink></li>
    </ul>
    <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Addcart' element={<Addcart/>}/>
    <Route path='/Favoraties' element={<Favoraties/>}/>
    <Route path='/End' element={<End/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Nav