import React, { useContext, useRef } from 'react'
import logo from "../../assets/images/logo.svg"
import { FaBars, FaShoppingCart } from "react-icons/fa";
import "./Nav.css"
import {AllContext} from "../AllContext/AllContext"
import { NavLink } from 'react-router-dom'

export default function Nav() {
    const {total,setTotal} = useContext(AllContext)
    const navList = useRef()
    const handleNav = ()=>{
        if (navList.current.classList.contains("navMobile")) {
      navList.current.classList.remove("navMobile");
    } else {
      navList.current.classList.add("navMobile");
    }
    }

    return (
        <nav className='nav_c navMobile flex justify-between items-center'>
            <NavLink to='/' className="NavImg_c"><img src={logo} alt="" /></NavLink>
            <div ref={navList} className="navList flex items-center">
                <NavLink className="navLink" to="/">Home</NavLink>
                <NavLink className="navLink" to="menu">Menu</NavLink>
                <NavLink className="navLink" to="contact">Contact</NavLink>
            </div>
            <div className="flex cartAndBar items-center gap-5">
                <NavLink to="/cart"><button className='flex items-center gap-2 o-btn cartBtn'><FaShoppingCart/> ${Number(total).toFixed(2)}</button></NavLink>
                <FaBars onClick={handleNav} className='navBars'/>
            </div>
        </nav>
    )
}
