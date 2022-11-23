import { Link } from "react-router-dom"
import { useState } from "react"

function Nav() {

  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="content">
        <div className="nav-left">
          <Link className="btn" to='/'>Home</Link>
        </div>
        <div className="nav-right">
          <ul className={navOpen ? 'mobile-nav-menu' : ''}>
            <Link className="btn nav-btn mx_05 inline-block" to='/' id={navOpen ? 'show' : ''}><li>Login</li></Link>
            <Link className="btn nav-btn mx_05 inline-block" to='/' id={navOpen ? 'show' : ''}><li>Contact</li></Link>
            <Link className="btn nav-btn mx_05 inline-block" to='/' id={navOpen ? 'show' : ''}><li>About</li></Link>
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