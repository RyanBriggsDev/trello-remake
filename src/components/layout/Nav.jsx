import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import { auth, logout } from '../../firebase'
import { useAuthState } from "react-firebase-hooks/auth";

function Nav() {

  const [navOpen, setNavOpen] = useState(false)
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
  }, [user, loading]);

  return (
    <nav className="content">
        <div className="nav-left">
          <Link className="btn" to='/'>Home</Link>
        </div>
        <div className="nav-right">
          <ul className={navOpen ? 'mobile-nav-menu' : ''}>
            {!user 
            ?
            <>
              <Link className="btn nav-btn mx_05 inline-block" to='/auth/login' id={navOpen ? 'show' : ''}><li>Login</li></Link>
              <Link className="btn nav-btn mx_05 inline-block" to='/auth/register' id={navOpen ? 'show' : ''}><li>Register</li></Link>
            </>
            : 
              <li onClick={() => logout()} className="btn nav-btn mx_05 inline-block" id={navOpen ? 'show' : ''}>Logout</li>
            }
          </ul>
          <div className={`hamburger ${navOpen ? 'open' : ''}`} onClick={() => setNavOpen(!navOpen)}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>
    </nav>
  )
}

export default Nav