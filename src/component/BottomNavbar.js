import React from 'react';
import "../styles/BottomNavbar.css";
import { FaWallet, FaBell, FaCompass, FaCog} from "react-icons/fa";

const BottomNavbar = () => {
  return (
    <div className='bottom-navbar'>
        <FaWallet fontSize={32}  className='bottom-navbar-icons' />
        <FaCompass fontSize={32}  className='bottom-navbar-icons'/>
        <FaBell fontSize={32}  className='bottom-navbar-icons'/>
        <FaCog fontSize={32}  className='bottom-navbar-icons'/>
    </div>
  )
}

export default BottomNavbar