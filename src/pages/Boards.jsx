import { toast } from "react-toastify"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, db } from '../firebase'
import { useState, useEffect } from "react";
import { query, collection, where, getDocs  } from "firebase/firestore";
import { useNavigate, Link} from "react-router-dom";

function Boards() {

  const [user, error] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState(null);
  const [userDocId, setUserDocId] = useState(null)
  const [updating, setUpdating] = useState(false)
  const [boardToEdit, setBoardToEdit] = useState()
  const [editData, setEditData] = useState()

  // for updating data
  const [updateData, setUpdateData] = useState({
    title: '',
    color: '',
    note1: '',
    note2: '',
    note3: '',
    user: ''
  })

  const navigate = useNavigate();

  // FETCH USER
  const fetchData = async () => {
    if(user) { 
      try {
        // get user doc id
        const userQ = query(collection(db, "users"),
        where("uid", "==", user.uid),
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
      } catch (error) {
        console.log(error)
      }
    }

        // fetch boards/notes
        if (userDocId !== null) {
          try {
            const q = query(collection(db, `users/${userDocId}/boards`), 
            )
            const docSnap = await getDocs(q)
            let boardData = []
            docSnap.forEach((boardDoc) => {
              return boardData.push({
                id: boardDoc.id,
                data: boardDoc.data(),
              })
            })
            setLoading(false)
            setBoards(boardData)
          }
          catch (error) {
            console.log(error)
          }
        }
      }

  const fetchBoardToEdit = async () => {
    // setLoading(true)
      try {
        const q = query(collection(db, `users/${userDocId}/boards`), where('title', '==', boardToEdit))
        const docSnap = await getDocs(q)
        let boardEditData = []
        docSnap.forEach((boardEditDoc) => {
          return boardEditData.push({
            id: boardEditDoc.id,
            data: boardEditDoc.data(),
          })
        })
        setEditData(boardEditData);
        // setLoading(false)
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
    fetchData()
    if (boardToEdit) {
      fetchBoardToEdit()
    }
  }, [user, loading, userDocId, boardToEdit, editData, fetchBoardToEdit, fetchData])

  if(!user) {
    navigate('/login')
  }

  if (loading) {
    return <p>loading...</p>
  }

  if(updating) {
    return (
      <>
        <p>// Form to set updated data</p>
        <form>
          <input type="text" placeholder="title"
          // placeholder={editData[0].data.title}
          />
          <input type="text" placeholder="color"
          // placeholder={editData[0].data.note1}
          />
          <input type="text" placeholder="note1"
          // placeholder={editData[0].data.note1}
          />
          <input type="text" placeholder="note2"
          // placeholder={editData[0].data.note2}
          />
          <input type="text" placeholder="note3"
          // placeholder={editData[0].data.note3}
          />
        </form>
        <button onClick={() => {
          setUpdating(false)
          setBoardToEdit()
        }}>Done</button>
      </>
    )
  }

  if(boards) {
    return (
      <>
      <div>
        {boards.map((board, id) => (
          <div key={board.id}>
            <h3>{board.data.title}</h3>
            <p>{board.data.note1}</p>
            <p>{board.data.note2}</p>
            <p>{board.data.note3}</p>
            <button onClick={() => {
              setBoardToEdit(board.data.title)
              setUpdating(true)
              console.log(editData)
            }}>Edit</button>
            <br /> <br />
          </div>
        ))}
        <br />
        <button><Link to='/create-board'>Create Boards</Link></button>
      </div>
    </>
    )
}}

export default Boards