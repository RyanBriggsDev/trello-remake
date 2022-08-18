import { Link, useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"

function Nav() {

  const auth = getAuth()
  const navigate = useNavigate()

  const [user, setUser] = useState(null)

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

  return (
    <nav>
        <div className="container nav-container">         
            <div className="nav-left">
                <Link to='/'>Trello Remake</Link>
            </div>
            <div className="nav-right">
              {user 
                ? 
              <button onClick={onLogout}>Logout</button>
                :
                <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
                </>
            }
            </div>
        </div>
    </nav>
  )
}

export default Nav