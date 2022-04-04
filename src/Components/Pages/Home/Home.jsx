import React from 'react'
import Header from '../NotChanged/Header/Header';
import ToggleFeatures from '../NotChanged/Toggle-Features/ToggleFeatures';
import UserProfile from './UserProfile/Profile'
import Recommend from './RecommendVideos/Recommend';
import UserChannel from './UserChannel/Channel';
import { Context } from '../../../Context/Videos/Videos';

import './Home.scss'

function Home() {

  // const { setToggleButton } = React.useContext(ToggleContext);

  // React.useEffect(() => {
  //   setToggleButton(true);
  // }, []);


  const { videos, setVideos } = React.useContext(Context);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await res.json();
      if (data?.length > 0) {
        const video = data.splice(20, 300);
        setVideos([...video]);
      }
    })();
  }, []);

  return (
    <>
        <Header/>
        <main className="main">
          <ToggleFeatures/>
          <div className="home-container">
            <UserProfile/>
            <Recommend/>
            <UserChannel/>
          </div>
        </main>
        
    </>
  )
}

export default Home;
