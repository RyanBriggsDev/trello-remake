import { useEffect, useState, useParams } from "react"
import { collection, getDocs, query, where, orderBy, limit, startAfter, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from "react-toastify"

function Boards() {

  const [boards, setBoards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchListings = async () => {
        try {
            // Create a query - this is like setting a ? query for an api
            const q = query(
                collection(db, 'boards'),
                // orderBy('timestamp', 'desc')
            )

            // Execute/call query - this is like fetching a url with specific queries
            const querySnapshot = await getDocs(q)
            
            // Where the data will be held
            const boards = []
            // Loop through all the database data that's found and add it to listings array
            querySnapshot.forEach((doc) => {
                return boards.push({
                    id: doc.id,
                    data: doc.data(),
                })
            })

            setBoards(boards)
            setLoading(false)
        } catch (error) {
            toast.error('Failed to find boards')
        }
    }
    fetchListings()
  }, [])

  return (
    <>
      {loading ? <p>Loading...</p> 
      :
      <>{boards.map((board, id) => (
        <p key={board.id}>{board.data.name}</p>
      ))}</>}
    </>
)
  }

export default Boards