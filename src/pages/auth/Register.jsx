import Header from "../../components/pageStructure/Header"
import { toast } from "react-toastify"
import { useState } from "react"

import { registerWithEmailAndPassword } from "../../firebase"

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(password === password2) {
        try {
            registerWithEmailAndPassword(name, email, password)
            toast.success('Success!')
        } catch (error) {
            toast.error(error)
        }
    } else {
        toast.error(`Passwords don't match.`)
    }
  }

  return (
    <>
        <Header
            title={'User Registration'}
            desc={'Register for a free account.'}
            btnText={'Already have an account? Login.'}
            link={'/auth/login'}
        />
        <section>
            <form className="form form-register">
                <input className="reg-input-one" value={name} onChange={(e) => onChange(e)} id={'name'} type="text" placeholder="Name" />
                <input className="reg-input-two" value={email} onChange={(e) => onChange(e)} id={'email'} type="email" placeholder="Email" />
                <input className="reg-input-three" value={password} onChange={(e) => onChange(e)} id={'password'} type="password" placeholder="Password" />
                <input className="reg-input-four" value={password2} onChange={(e) => onChange(e)} id={'password2'} className="last-input" type="password" placeholder="Confirm Password" />
                <button
                    className="btn btn-primary" 
                    onClick={(e) => onSubmit(e)}>
                    Register
                </button>
            </form>
        </section>
    </>
  )
}

export default Register