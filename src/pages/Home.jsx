import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"

function Home() {

  const [user, setUser] = useState(null)
  
  const auth = getAuth()

  useEffect(() => {
    setUser(auth.currentUser);
  }, [])

  return user ? 
  <div>
    <p>Welcome Back</p>
    <h1>{user.displayName}</h1>
  </div> 
  : 
  <p>Not logged in</p>

}

export default Home