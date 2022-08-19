import { Link, useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function Nav() {

  const auth = getAuth()
  const navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(null)
  const [user, setUser] = useState()

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser); 
    }
  }, [auth.currentUser])

  const onLogout = () => {
    auth.signOut()
    setUser(null)
    navigate('/')
    toast.success('Logged out')
  }

  console.log(auth.current);

  return (
    <nav>
      <div className="container nav-container">
        <div className="nav-left">
          <Link to='/'>Trello Remake</Link>
        </div>
        <div className="nav-right">
          {user === null ? 
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
            :
            <>
              <button onClick={onLogout}>Logout</button>
              <Link to='/boards'>Your Boards</Link>
            </>
          }
        </div>
      </div>
    </nav>
  )
  }
export default Nav