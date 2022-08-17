import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  updateProfile 
} from 'firebase/auth'
import { serverTimestamp, setDoc, doc } from 'firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../firebase.config'

function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if(password !== password2) {
      toast.error('Passwords do not match')
    } else {
    try {
      // initiate auth
      const auth = getAuth()
       // reg the user
      const userCredential = await createUserWithEmailAndPassword(
        auth, email, password
      )
      // get user info
      const user = userCredential.user
      // update user display name
      updateProfile(auth.currentUser, {
        displayName: name
      })

      // add user to firestore
      // make a copy of form data
      const formDataCopy = {...formData}
      // remove password from copied variable
      delete formDataCopy.password
      delete formDataCopy.password2
      // add timestamp to copy data
      formDataCopy.timestamp = serverTimestamp()
      // setDoc updates database and adds user to 'users' firestore collection
      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      // redirect to home
      navigate('/')
      toast.success('User created')

    } catch (error) {
      toast.error(error)
    }
  }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
          <input 
            type="text" 
            id='name'
            value={name}
            onChange={onChange}
            placeholder="Enter your name"
            required
          />
          <input 
            type="text" 
            id='email'
            value={email}
            onChange={onChange} 
            placeholder="Enter your email"
            required
          />
          <input 
            className="password" 
            type="password" 
            id='password'
            value={password}
            onChange={onChange}
            placeholder="Enter your password"
            required
          />
          <input 
            className="password2" 
            type="password" 
            id='password2'
            value={password2}
            onChange={onChange}
            placeholder="Confirm your password"
            required
          />
          <button>Submit</button>
      </form>
    </div>
  )
}

export default Register