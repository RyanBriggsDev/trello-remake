import { Link } from "react-router-dom"
import { getAuth } from "firebase/auth"
import { useState, useEffect } from "react"

function Home() {

  const auth = getAuth()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
    
  useEffect(() => {
    const auth = getAuth()
    if (auth.currentUser) {
      setUser(auth.currentUser)
    }
    setLoading(false)
  }, [auth.currentUser])

  if(loading) {
    return <p>Loading...</p>
  }

  


  return (
    <div>
      <h1>
        Trello helps teams move work forward.
      </h1>
      <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
      {auth.currentUser
            ? 
              <Link to='/create-board'><button className="btn btn-primary">Create a new board</button></Link>
            : 
              <Link to='/register'><button className="btn btn-primary">Sign up - it's free</button></Link>
      }
      
    </div>
  )

}

export default Home