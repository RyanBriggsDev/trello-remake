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
  // for updating data
  const [updateData, setUpdateData] = useState({
    title: '',
    color: '',
    note1: '',
    note2: '',
    note3: '',
    user: user,
  })

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

  useEffect(() => {
    fetchData()
  }, [user, loading, userDocId])

  if(!user) {
    navigate('/login')
  }

  if (loading) {
    return <p>loading...</p>
  }



  if(boards) {
    return (
      <div>
        {boards.map((board, id) => (
          <div key={board.id}>
            <h3>{board.data.title}</h3>
            <p>{board.data.note1}</p>
            <p>{board.data.note2}</p>
            <p>{board.data.note3}</p>
            <br />
          </div>
        ))}
        <br />
        <button><Link to='/create-board'>Create Boards</Link></button>
      </div>
    )
  }
}

export default Boards