import React from 'react'
import logo from './../assets/Kalvium-Logo-SVG.svg'
import { useDispatch } from 'react-redux'
import { searchBooks } from '../utils/redux/action'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const dispatch = useDispatch()
  return (
    <div id='navbar'>
      <Link  to={"/"} style={{textDecoration:"none", color:"black",}}>
      <div id='logo'>
            <img src={logo} alt="" /> 
            <span className='logo-text'>Books</span>
        </div>
      </Link>
        
        <div id='search'>
            
            <input onChange={(e)=>{
                dispatch(searchBooks(e.target.value))
            }} type="text" placeholder='Search Books' />
        </div>
        <div id='register-btn'>
            <button><Link className='link' to={"/register"} style={{color:"white",}} >Register</Link></button>
        </div>
    </div>
  )
}
