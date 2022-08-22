import { Link, useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function Nav() {

  // const { auth } = useContext(AuthContext)
  
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  // const auth = getAuth()

  useEffect(() => {
    const fetchUser = async () => {
      const auth = getAuth()
      setUser(auth)
    }
    fetchUser()
  }, [user])

  // const onLogout = () => {
  //   auth.signOut()
  //   navigate('/')
  //   // toast.success('Logged out')
  // }

  return <p>egg</p>
}

  //   return (
  //     <nav>
  //       <div className="container nav-container">
  //         <div className="nav-left">
  //           <Link to='/'>Trello Remake</Link>
  //         </div>
  //         <div className="nav-right">
  //           {auth.currentUser !== null ?
  //           <>
  //             <button onClick={onLogout}>Logout</button>
  //             <Link to='/boards'>Your Boards</Link>
  //           </>
  //             :
  //             <>
  //               <Link to='/login'>Login</Link>
  //               <Link to='/register'>Register</Link>
  //             </>
  //           }
  //         </div>
  //       </div>
  //     </nav>
  //   )   
  // }

export default Nav