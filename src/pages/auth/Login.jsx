import Header from "../../components/pageStructure/Header"
import { toast } from "react-toastify"
import { useState, useEffect } from "react"

import { logInWithEmailAndPassword, auth, logout } from '../../firebase'

import { useAuthState } from "react-firebase-hooks/auth";

function Login() {

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return 
    }
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
        } catch (error) {
            toast.error(error)
        }
  }

  if(user) {
    return <>
      <p>Already logged in.</p>
      <section>
          <button className="btn btn-primary" onClick={() => logout()}>Logout</button>
      </section>
    </>
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
        <section>
          <button className="btn btn-primary" onClick={() => logout()}>Logout</button>
        </section>
    </>
  )
}

export default Login