import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Searchpage from './Searchpage'
import {  Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (

    
    <div className="app">
      <Router>
        <Header />
        
    <Routes>
          <Route path="/"  element={ <Home />}/>
           
         
          <Route path="/search"  element={ <Searchpage />}/>
          </Routes>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;