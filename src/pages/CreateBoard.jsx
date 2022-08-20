import { serverTimestamp, doc, addDoc, collection } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import { db } from "../firebase.config"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"

function CreateBoard() {

    const navigate = useNavigate()
    const auth = getAuth()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      const auth = getAuth()
      if (auth.currentUser) {
        setUser(auth.currentUser)
      }
      setLoading(false)
    }, [auth.currentUser])

    const [formData, setFormData] = useState({
        boardName: '',
        color: 'blue'
    })

    const { boardName, color } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1) 
        }))
      }

      const onSubmit = async (e) => {
        e.preventDefault()
        formData.timestamp = serverTimestamp()
        const docRef = await addDoc(collection(db, 'boards'), formData)
        toast.success('Success')
        // navigate('/')
      }

      if (loading) {
        return <p>Loading...</p>
      }

      if(auth.currentUser !== null) {
        return (
        <main>
          <div className="form-div">
            <form onSubmit={onSubmit}>
              <input type="text" id='boardName' value={boardName}onChange={onChange} placeholder='Name your board' required/>
              <select id="color" value={color} onChange={onChange} required> 
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
              </select>
              <button>Submit</button>
            </form>
          </div>
          <div className="board-display-div">
            <h3 style={{background: color}}>{boardName}</h3>
          </div>
        </main>
          
        )


      } else {
        return <p>No user</p>
      }
}

export default CreateBoard