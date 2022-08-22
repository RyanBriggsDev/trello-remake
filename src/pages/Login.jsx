import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import OAuth from "../components/OAuth";

function Login() {
  
  const auth = getAuth()

  // state

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Incorrect user credentials')
    }
  }

  // if(loading) {
  //   return <p>Loading...</p>
  // }

  // if(user !== null) {
  //   toast.info('Already signed in')
  //   return navigate('/') 
  // }
  
  return (
    <>
      <h1>Welcome</h1>
      <form onSubmit={onSubmit}>
            <input 
              type="email" 
              className="email-input" 
              placeholder="Email" 
              id='email' 
              value={email} 
              onChange={onChange}
            />
            <input 
              type='password' 
              className="password-input" 
              placeholder="Password" 
              id='password' 
              value={password} 
              onChange={onChange}
            />
              <button>
                Sign In
              </button>
          </form>
          <OAuth />
          <Link to='/forgot-password'><p>Forgot Password?</p></Link>
          <h3>No account? <Link to={'/register'}>Register</Link> </h3>
    </>
  )
}

export default Login