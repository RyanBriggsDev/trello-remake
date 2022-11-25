import Header from "../../components/pageStructure/Header"
import { toast } from "react-toastify"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { logInWithEmailAndPassword, auth, logout } from '../../firebase'

import { useAuthState } from "react-firebase-hooks/auth";

function Login() {

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
  }, [user, loading]);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
        try {
          logInWithEmailAndPassword(email, password)
          toast.success(`You're logged in.`)
          navigate('/user/dashboard')
        } catch (error) {
            toast.error(error)
        }
  }

  if(loading) return <p>Loading...</p>

  if(user) {
    return (
    <>
      <p>Already logged in.</p>
      <button className="btn btn-primary my_05" onClick={() => logout()}>Logout</button>
    </>
    )
  }

  return (
    <>
        <Header
            title={'User Login'}
            desc={'Login to access your account.'}
            btnText={`Don't have an account? Register now.`}
            link={'/auth/register'}
        />
        <section>
          <h2>Enter your email and password</h2>
            <form className="form form-login">
                <input className="login-input-oneef" value={email} onChange={(e) => onChange(e)} id={'email'} type="email" placeholder="Email" />
                <input className="login-input-two last-input" value={password} onChange={(e) => onChange(e)} id={'password'} type="password" placeholder="Password" />
                <button
                    className="btn btn-primary" 
                    onClick={(e) => onSubmit(e)}>
                    Login
                </button>
            </form>
        </section>
    </>
  )
}

export default Login