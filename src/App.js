import './App.css';
import { BrowserRouter } from "react-router-dom";
import  Router   from './router';
import Navbar from './components/Navbar'
import { connect } from "react-redux";
import React, { useEffect } from 'react';

function App(props) {
  return (
    
    <BrowserRouter>
        <div className= "App"> 
        <Navbar/>
        <Router />
        </div>
        </BrowserRouter>
     
   
  );
}
const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps)(App);