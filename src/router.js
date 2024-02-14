import { Routes, Route } from "react-router-dom";
import MovieIndex from "./containers/MovieIndex";
import {connect} from 'react-redux';
import { useEffect, useState } from "react";
import MovieShow from "./containers/MovieShow";

function Router(props) {



    return ( 
        <Routes>
         <Route path='/movies/:id' element={<MovieShow />} />
        <Route path='/movies' element={<MovieIndex />} />
       
        </Routes>
    )
}

export default connect(null)(Router);