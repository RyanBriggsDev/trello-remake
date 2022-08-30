import { serverTimestamp, doc, addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { db } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"

function CreateBoard() {

  const [user, loading, error] = useAuthState(auth);
  const [boards, setBoards] = useState(null)
  const [dataLoading, setDataLoading] = useState(true)
  const [userDocId, setUserDocId] = useState(null)

  const navigate = useNavigate();


  // FETCH USER
  const fetchData = async () => {
    if(user) { 
      try {
        // get user doc id
        const userQ = query(collection(db, "users"),
        where("uid", "==", user.uid)
        )
        const userDocSnap = await getDocs(userQ)
        const data = []
        userDocSnap.forEach((doc) => {
          return data.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setUserDocId(data[0].id)
        setDataLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchData()
    if (dataLoading) return;
    if (!user) navigate("/login");
    // fetchBoards()
  }, [user, dataLoading]);

    const [formData, setFormData] = useState({
        title: '',
        color: '',
        note1: '',
        note2: '',
        note3: '',
        user: ''
    })

    const { color, title, note1, note2, note3 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
          user: user.uid
        }))
      }

      const onClick = async (e) => {
        e.preventDefault()
        formData.timestamp = serverTimestamp()
        const boardsRef = await addDoc(collection(db, `users/${userDocId}/boards`), formData)
        toast.success('Success')
        navigate('/boards')
      }

      if (dataLoading) {
        return <p>Loading...</p>
      }

      if(user) {
        return (
          <div className="create-board-container">
            <div className="left">
              <div className="form-container mw-50">
                <div className="form-div w-100">
                    <input type="text" className="form-input" id='title' value={title} onChange={onChange} placeholder='Name your board' required/><br />
                    <input type="text" className="form-input" id='color' value={color} onChange={onChange} placeholder='Choose a board color' required/> <br />
                    <input type="text" className="form-input" id='note1' value={note1} onChange={onChange} placeholder='Note 1'/> <br />
                    <input type="text" className="form-input" id='note2' value={note2} onChange={onChange} placeholder='Note 2'/><br />
                    <input type="text" className="form-input" id='note3' value={note3} onChange={onChange} placeholder='Note 3'/><br />
                    <button className="btn btn-primary" onClick={onClick}>Submit</button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="form-container mw-50 h-100">
                <div className="form-div w-100 h-100 space-between px-15" style={{background: color}}>
                  <h3 className="board-title">{title}</h3>
                  <p className="board-note">{note1}</p>
                  <p className="board-note">{note2}</p>
                  <p className="board-note">{note3}</p>
                </div>
              </div>
            </div>
          </div>
          
        )
      }
  }

export default CreateBoard