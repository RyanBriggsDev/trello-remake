import { serverTimestamp, doc, addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { db } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"

function CreateBoard() {

  const [user, loading, error] = useAuthState(auth);
  const [boards, setBoards] = useState(null)

  const navigate = useNavigate();




// // Testing here

// const fetchBoards = async () => {
//   try {
//     const q = query(collection(db, "boards"), 
//       // where("user", "==", user?.uid)
//     )
//     const docSnap = await getDocs(q)
//     let boards = []

//     docSnap.forEach((doc) => {
//       return boards.push({
//         id: doc.id,
//         data: doc.data(),
//       })
//     })
//     setBoards(boards)
//     }
//   catch (error) {
//     console.log(error)
//   }
// }


useEffect(() => {
  if (loading) return;
  if (!user) navigate("/login");
  // fetchBoards()
}, [user, loading]);







    const [formData, setFormData] = useState({
        boardName: '',
        color: '',
        user: ''
    })

    const { boardName, color } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
          user: user.uid
        }))
      }

      const onSubmit = async (e) => {
        e.preventDefault()
        formData.timestamp = serverTimestamp()
        const boardsRef = await addDoc(collection(db, `boards`), formData)
        toast.success('Success')
        navigate('/boards')
      }

      if (loading) {
        return <p>Loading...</p>
      }

      if(user) {
        return (
        <main>
          <div className="form-div">
            <form onSubmit={onSubmit}>
              <input type="text" id='boardName' value={boardName} onChange={onChange} placeholder='Name your board' required/>
              <select id="color" value={color} onChange={onChange} required>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
              </select>
              <button>Submit</button>
            </form>
          </div>
          <div className="board-display-div" >
            <h3>{boardName}</h3>
          </div>
        </main>
          
        )
      }

}

export default CreateBoard