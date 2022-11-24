import Header from "../../components/pageStructure/Header"
import { toast } from "react-toastify"
import { useState } from "react"

import { logInWithEmailAndPassword } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

function Login() {
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
          signInWithEmailAndPassword(email, password)
          toast.success('Success!')
        } catch (error) {
            toast.error(error)
        }
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
                <input className="login-input-one" value={email} onChange={(e) => onChange(e)} id={'email'} type="email" placeholder="Email" />
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