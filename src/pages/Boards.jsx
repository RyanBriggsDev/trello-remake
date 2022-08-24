import { toast } from "react-toastify"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, db } from '../firebase'
import { useState, useEffect, useSyncExternalStore } from "react";
import { query, collection, where, getDocs  } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Boards() {

  const [user, error] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState(null);
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
          </div>
        ))}
      </div>
    )
  }
}

export default Boards


  // const fetchUserName = async () => {
  //   try {
  //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };