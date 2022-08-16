import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
        <div className="container nav-container">         
            <div className="nav-left">
                <Link to='/'>Trello Clone</Link>
            </div>
            <div className="nav-right">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav