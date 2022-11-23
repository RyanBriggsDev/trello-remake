import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="content">
        <div className="nav-left">
          <Link className="btn" to='/'>Home</Link>
        </div>
        <div className="nav-right">
          <ul>
            <Link className="btn nav-btn mx_05 inline-block" to='/'><li>Login</li></Link>
            <Link className="btn nav-btn mx_05 inline-block" to='/'><li>Contact</li></Link>
            <Link className="btn nav-btn mx_05 inline-block" to='/'><li>About</li></Link>
          </ul>
          <div className="hamburger">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>
    </nav>
  )
}

export default Nav