import { useEffect, useState } from 'react'
import Header from '../../components/pageStructure/Header'
import Protected from '../../components/Protected'
import DashboardContent from '../../components/user/DashboardContent';

import { useAuthState } from "react-firebase-hooks/auth";
import { fetchBoards } from '../../firebase';

import useFetchBoards from '../../hooks/useFetchBoards';
import useSetTitle from '../../hooks/useSetTitle';

function Dashboard() {

  useFetchBoards()
  useSetTitle('Dashboard')

  return (
    <Protected>
      <>
          <Header 
              title={'Your Dashboard'}
              desc={`Welcome to your dashboard Trello Dashboard`}
              btnText={'View your boards'}
              link='/user/boards'
          />
          <section className='grid-1-2 g-1'>
            <div className="user-sidebar">
              user sidebar
            </div>
            <DashboardContent />
          </section>
      </>
    </Protected>
  )
}

export default Dashboard