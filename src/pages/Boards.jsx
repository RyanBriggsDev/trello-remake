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
  const [boardToEdit, setBoardToEdit] = useState(null)
  const [editData, setEditData] = useState(null)
  const [editedDataToUpload, setEditedDataToUpload] = useState()

  // for updating data
  const [updateData, setUpdateData] = useState({
    title: '',
    color: '',
    note1: '',
    note2: '',
    note3: '',
    user: ''
  })

  const onEditChange = (e) => {
    setBoards((prevState) => ({
      ...prevState,
    }))
    console.log(boards);
  }

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
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
    fetchData()
      if (boardToEdit) {
        fetchBoardToEdit()
      }
  }, [user, loading, userDocId, boardToEdit])

  if(!user) {
    navigate('/login')
  }

  if (loading) {
    return <p>loading...</p>
  }

  if(updating && editData) {
    return (
      <>
        <h1>{editData[0].data.title}</h1>
        <form>
          <input type="text" placeholder={editData[0].data.title}
          />
          <input type="text" placeholder={editData[0].data.color}
          />
          <input type="text" placeholder={editData[0].data.note1}
          />
          <input type="text" placeholder={editData[0].data.note2}
          />
          <input type="text" placeholder={editData[0].data.note3}
          />
        </form>
        <button onClick={() => {
          setLoading(true)
          setUpdating(false)
          setBoardToEdit(null)
          onEditChange()
        }}>Done</button>
      </>
    )
  }

  if(boards) {
    return (
      <>
      <div className="boards-container">
        {boards.map((board, id) => (
          <div key={board.id} className='board-div' style={{background: board.data.color}}>
            <div className="board-title">
              <h3>{board.data.title}</h3>
            </div>
            <p className="board-note">{board.data.note1}</p>
            <p className="board-note">{board.data.note2}</p>
            <p className="board-note">{board.data.note3}</p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setBoardToEdit(board.data.title)
                setUpdating(true)
                console.log(editData)
            }}>Edit</button>
          </div>
        ))}
        <br />
      </div>
      <button><Link to='/create-board'>Create Boards</Link></button>
    </>
    )
}}

export default Boards