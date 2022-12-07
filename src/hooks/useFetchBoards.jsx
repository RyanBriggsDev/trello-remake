import { useEffect, useState } from "react"

import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

function useFetchBoards() {

    const [loading, setLoading] = useState(true)
    const [boards, setBoards] = useState(null)

    useEffect(() => {
        const fetchBoards = async () => {
        const docRef = doc(db, `users/PDEezsir70X4oJkYci1h/boards/EqulyZR3AWJDDF5DRz7Q`)
        const docSnap = await getDoc(docRef)
    
        if(docSnap.exists()) {
            console.log('exists')
            setBoards(docSnap.data())
            setLoading(false)
        }
    }
        fetchBoards()
    }, [])

    console.log(boards);

    if(loading) return <p>Loading...</p>

  return (
    <></>
  )
}

export default useFetchBoards