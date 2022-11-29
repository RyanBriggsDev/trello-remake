import Header from '../components/pageStructure/Header'
import VideoModal from '../components/modals/VideoModal';
import HomeHeroImage from '../assets/home/homeHeroImage.webp'
import InlineLink from '../components/pageStructure/InlineLink';

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

      {/* Hero  */}
      <section>
        <VideoModal />
        <div className="home-hero-image my_05 flex center">
          <img className='w-75' src={HomeHeroImage} alt="workflow example" />
        </div>
      </section>

      {/* trello 101 */}
      <section>
        <div className="flex center">
          <label>Trello 101</label>
          <h3>A productivity powerhouse</h3>
          <p>{`Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in `}<InlineLink href={'https://trello.com/guide'} text={'our guide for getting started.'} /></p>
        </div>
      </section>
    </>
  )
}

export default Home