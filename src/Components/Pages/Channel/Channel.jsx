import React from 'react'
import Header from '../NotChanged/Header/Header';
import ToggleFeatures from '../NotChanged/Toggle-Features/ToggleFeatures';
import Top from './Top/Top'
import Main from './Main/Main';
import Bottom from './Bottom/Bottom';

import { Context } from "../../../Context/Toggle/Toggle";

import './Channel.scss';

function Channel() {

  const { setToggleButton } = React.useContext(Context);

  React.useEffect(() => {
    setToggleButton(true);
  }, []);

  return (
    <>
      <Header/>
      <div className="channel-container">
        <ToggleFeatures />
        <div className="channel-side">
          <Top/>
          <Main/>
          <Bottom/>
        </div>
      </div>
    </>
  )
}

export default Channel;
