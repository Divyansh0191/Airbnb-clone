import React from 'react'
import  {useState} from 'react';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import {useNavigate} from "react-router-dom"


import GroupsIcon from '@mui/icons-material/Groups';
import './Search.css'
import { Button } from '@mui/material';
//date picker compo
function Search() {
  const navigate = useNavigate();
    const[startdate,setstartdate]=useState(new Date());
    const[enddate,setenddate]=useState(new Date());
  const seleclectionRange={
    startDate:startdate,
    enddate:enddate,
    key:"selection"
  };
  function handleSelect(ranges){
    setstartdate(ranges.seleclectionRange.startDate); 
    setenddate(ranges.seleclectionRange.endDate);
  }

    return (
    <div className='search'>
   <DateRangePicker ranges={[seleclectionRange]} onChange={handleSelect}/>
   <h2>
   Number of quests
    <GroupsIcon/>
    </h2>
    <input min={0}
    defaultValue={2}
    type="number" />
     <Button onClick={()=> navigate("/search")}>Search Airbnb</Button>
    </div>
  )
}
export default Search
