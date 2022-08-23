import { Link, useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { logout, db, auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { query, collection, getDocs, where } from "firebase/firestore";

function Nav() {

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

      
      return (
        <nav>
        <div className="container nav-container">
          <div className="nav-left">
            <Link to='/'>Trello Remake</Link>
          </div>
          <div className="nav-right">

            {user || user !== null ?
            <>
              <button onClick={logout}>Logout</button>
              <Link to='/boards'>Your Boards</Link>
            </>
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