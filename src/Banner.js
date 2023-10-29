import React  from 'react'
import  {useState} from 'react'
import Search from './Search'
import './Banner.css'
import { Button } from '@mui/material'
import {useNavigate} from "react-router-dom"
function Banner() {
const navigate = useNavigate();
    const[showsearch,setshowsearch]=useState(false);
  return (

    <div className='banner'>
      <div className='banner_search'>
      {showsearch && <Search/>}
        <Button onClick={()=>
            setshowsearch(!showsearch)}
         className='banner_searchButton' variant='outlined'>{!showsearch ? "Search Dates":"Hide"}</Button>
      </div>
     <div className='banner_info'>
     <h1>Explore Yourself take a break</h1>
     <h5>Plan a diffent kind of gateway to recover the hidden gems near you</h5>
    <Button onClick={() => navigate('/search')}
    variant='outlined'>Explore Nearby</Button>
    </div>
    </div>
  )
}

export default Banner
