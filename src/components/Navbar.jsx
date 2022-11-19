import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../app/AuthContext';
import Logo from '../img/logo.png';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);


  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to='/' >
            <img src={Logo} alt='logo' />
          </Link>
        </div>

        <div className='links'>
          <Link className="link" to="/?cat=art">
            <h6>| ART |</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>| CINEMA |</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>| DESIGN |</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>| FOOD |</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>| TECHNOLOGY |</h6>
          </Link>

          {currentUser ? (
            <>
              <span>Hello, {currentUser.username}</span>
              <span onClick={logout}>Logout</span>
              <span className='write'>
                <Link to='/write'>
                  Write
                </Link>
              </span>
            </>
          ) : (
            <>
              <Link className='link' to='/login'>
                Login
              </Link>
            </>
          )}

        </div>
      </div>

    </div>
  )
}

export default Navbar