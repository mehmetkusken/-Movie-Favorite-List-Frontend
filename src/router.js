import { Routes, Route } from "react-router-dom";
import {connect} from 'react-redux';
import { useEffect, useState } from "react";
import MovieIndex from "./containers/MovieIndex";
import Home from "./containers/Home";
import MovieShow from "./components/MovieShow";
import Login from './components/Login';
import Signup from './components/Signup';

function Router(props) {
    
    const [isAuth, setIsAuth] = useState(false);
   
    useEffect(() => {
        if (props.username && props.username.length > 0) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [props.username])

    return ( 
        <Routes>
             {isAuth ? <>
        <Route path='/movies/:id' element={<MovieShow/>} />
        <Route path='/movies' element={<MovieIndex />} />
        <Route exact path='/' element={<Home />} />
        </> : <>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        </>}
       
        </Routes>
    )
}

const mapStateToProps = (state) => ({username: state.user.username})


export default connect(mapStateToProps)(Router);