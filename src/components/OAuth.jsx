import { useNavigate } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from "react-toastify"
import googleIcon from '../assets/google_btn.png'

function OAuth() {

    const navigate = useNavigate()
    
    const onClick = async () => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            // check for user in db
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            // if user doesn't exist, create user
            if (!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }
            navigate('/')
        } catch (error) {
            toast.error('Failed to authorise with Google')
        }
    }

  return (
    <div>
        <button onClick={onClick}>
            <img 
                src={googleIcon} 
                alt="google icon"
            />
        </button>
    </div>
  )
}

export default OAuth