import Header from '../components/pageStructure/Header'
import VideoModal from '../components/modals/VideoModal';
import HomeHeroImage from '../assets/home/homeHeroImage.webp'

import { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";


function Home() {

  const [user, loading, error] = useAuthState(auth);
    
  useEffect(() => {
  }, [user, loading]);

  if(loading) return <p>Loading...</p>
  
  return (
    <>
      {
        !user ? 
          <Header 
            title='Trello brings all your tasks, teammates, and tools together'
            desc='Keep everything in the same place—even if your team isn’t.'
            btnText={`Sign up - it's free!`}
            link='/auth/register'
          />
        : 
          <Header
            title='Trello brings all your tasks, teammates, and tools together'
            desc='Keep everything in the same place—even if your team isn’t.'
            btnText={`View your dashboard`}
            link='/user/dashboard'
          />
      } 
      <section>
        <VideoModal />
        <div className="home-hero-image my_05 flex center">
          <img className='w-75' src={HomeHeroImage} alt="workflow example" />
        </div>
      </section>

    </>
  )
}

export default Home