import Header from "../../components/pageStructure/Header"
import { useState } from "react"

function Register() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  })

  const [email, password, password2] = formData

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
                <input name={'email'} type="email" placeholder="email" />
                <input name={'password'} type="password" placeholder="password" />
                <input name={'password2'} className="last-input" type="password" placeholder="confirm password" />
                <button className="btn btn-primary">Register</button>
            </form>
        </section>
    </>
  )
}

export default Register