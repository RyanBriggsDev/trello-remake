import { useEffect } from 'react'
import Header from '../../components/pageStructure/Header'
import Protected from '../../components/Protected'
import { auth } from '../../firebase'

function Dashboard() {

  useEffect(() => {
  }, [auth])

  return (
    <Protected>
      <>
          <Header 
              title={'Your Dashboard'}
              desc={`Welcome to your dashboard ${auth.currentUser.displayName !== null ? ',' + auth.currentUser.displayName : " ...oh! We don't know your name. You can update your info in profile settings."}`}
              btnText={'View your boards'}
              link='/user/boards'
          />
      </>
    </Protected>
  )
}

export default Dashboard