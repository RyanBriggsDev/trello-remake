import Header from '../components/pageStructure/Header'
import VideoModal from '../components/modals/VideoModal';
import HomeHeroImage from '../assets/home/homeHeroImage.webp'
import DemoWorkspaces from '../components/demos/DemoWorkspaces'
import DemoDeadlines from '../components/demos/DemoDeadlines';

import { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import UseCases from '../components/demos/UseCases';
import WaysToGrow from '../components/demos/WaysToGrow';


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
          <img src={HomeHeroImage} alt="workflow example" />
        </div>
      </section>

      {/* trello 101 */}
      <section>
        <DemoWorkspaces />
      </section>
      <section>
        <UseCases />
      </section>
      <section>
        <DemoDeadlines />
      </section>
      <section>
        <WaysToGrow />
      </section>
    </>
  )
}

export default Home