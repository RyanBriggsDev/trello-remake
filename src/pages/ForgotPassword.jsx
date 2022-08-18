import { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'

function ForgotPassword() {

    const [email, setEmail] = useState('')

    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success(`Password reset sent to ${email}`)
        } catch (error) {
            toast.error(error)
        }
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <h1>Reset Password</h1>
            <input 
                type="email"
                value={email} 
                onChange={onChange}
            />
            <input type="submit" />
        </form>
    </div>
  )
}

export default ForgotPassword