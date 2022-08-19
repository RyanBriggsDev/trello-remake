import { serverTimestamp, doc, addDoc, collection } from "firebase/firestore"
import { db } from "../firebase.config"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"

function CreateBoard() {

    const navigate = useNavigate()

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

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" id='boardName' value={boardName}onChange={onChange} placeholder='Name your board' required/>
            <select id="color" value={color} onChange={onChange} placeholder='Choose board color' required> 
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
            </select>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CreateBoard