import { toast } from "react-toastify"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, db } from '../firebase'
import { useState, useEffect, useSyncExternalStore } from "react";
import { query, collection, where, getDocs  } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Boards() {

  const [user, error] = useAuthState(auth);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState();
  const [boards, setBoards] = useState(null);
  const [notes, setNotes] = useState(null);
  const [userDocId, setUserDocId] = useState(null)

  const navigate = useNavigate();

  // FETCH USER
  const fetchData = async () => {
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
      
      // fetch boards/notes
      if (userDocId !== null) {
          try {
            const q = query(collection(db, `users/${userDocId}/boards`), 
            )
            const docSnap = await getDocs(q)
            let boards = []
      
            docSnap.forEach((doc) => {
              return boards.push({
                id: doc.id,
                data: doc.data(),
              })
            })
            setBoards(boards)
            }
          catch (error) {
            console.log(error)
          }
      
      }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    setLoading(false)
  }, [user, loading, data]);

  if (loading) {
    return <p>loading...</p>
  }

  if(boards) {
    return (
      <div>
        {boards.map((board, id) => (
          <div key={board.id}>
            <h3>{board.data.boardName}.</h3>
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