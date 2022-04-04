import { display } from '@mui/system';
import React from 'react'
import Header from '../NotChanged/Header/Header';
import ToggleFeatures from '../NotChanged/Toggle-Features/ToggleFeatures';
import Channel from './Channel/Channel';
import LeftVerticalVideo from './LeftVerticalSide/LeftSide';

import './VideoPlayer.scss'

function VideoPlayer() {
  return (
    <>
        <Header/>
        <div className="main">
          <ToggleFeatures />
          <div className="main-player">
            <Channel/>
            <LeftVerticalVideo/>
          </div>
        </div>
    </>
  )
}

export default VideoPlayer;