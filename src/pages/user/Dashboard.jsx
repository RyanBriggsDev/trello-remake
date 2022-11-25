import Header from '../../components/pageStructure/Header'
import Protected from '../../components/Protected'

function Dashboard() {
  return (
    <Protected>
      <>
          <Header 
              title={'Your Dashboard'}
              desc={'Welcome to your dashboard, auth.currentName'}
          />
      </>
    </Protected>
  )
}

export default Dashboard