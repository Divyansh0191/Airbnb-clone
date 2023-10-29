import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import {Link} from "react-router-dom"
import './Header.css';
function Header() {
  return (
    <div className='header'>
    <Link to='/'>
      <img className="header_icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxkK7GVAdBs0uqz7vnPVz_X9MHrQpej741GRYUbnh&s" alt="logo"/>
      </Link>
      <div className  = "header_center">
      <input type="text" />
      <SearchIcon />
    </div>
    <div className  = "header_right">
    
      <p>Become a host</p>
     
    <LanguageIcon/>
    <ExpandMoreIcon/>
    <Avatar />
    </div>
    
    </div>
   
  )
}

export default Header
