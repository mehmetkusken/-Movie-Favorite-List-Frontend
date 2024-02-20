import React from 'react';
import { connect } from 'react-redux'
import { Link , useNavigate} from "react-router-dom";
export { Login } from '../components/Login';
export { Signup } from '../components/Signup';








const Navbar = ( { username } ) => {

  const navigate = useNavigate();

  const loggedInRender =  () => 
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <Link  className="nav-link" to='/'> Home </Link>
          </li>
        </ul>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <Link className="nav-link"  to='/movies'> Movies</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  

  const loggedOutRender = () => 


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link  className="nav-link"  to='/'> Home </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <Link className="nav-link"  to='/login'>Login</Link>
              </li>
        <li className="nav-item">
        <Link className="nav-link"  to='/signup'>Signup</Link>
        </li>
        

      </ul>
      
      </div>
    </div>
  </nav>



return username ? loggedInRender() : loggedOutRender()
}


const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps)(Navbar);