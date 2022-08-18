import { Link, 
  // useNavigate 
} from "react-router-dom"
// import { getAuth } from "firebase/auth"
// import { useState, useEffect } from "react"

function Home() {

  // const auth = getAuth()
  // const navigate = useNavigate()

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   if (auth.currentUser) {
  //     setUser(auth.currentUser); 
  //   }
  // }, [auth.currentUser])


  return (
    <div>
      <h1>
        Trello helps teams move work forward.
      </h1>
      <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
      <Link to='/register'><button className="btn btn-primary">Sign up - it's free</button></Link>
    </div>
  )

}

export default Home