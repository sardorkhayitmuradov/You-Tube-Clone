import React from 'react'

import Users from './Users/Users';

import Home from '../../../../Assets/Images/home.svg';
import Trending from '../../../../Assets/Images/trending.svg';
import Subscriptions from '../../../../Assets/Images/subscriptions.svg';
import Library from '../../../../Assets/Images/library.svg';
import History from '../../../../Assets/Images/history.svg';
import WatchLater from '../../../../Assets/Images/watchlater.svg';
import Favourites from '../../../../Assets/Images/favourites.svg';
import LikedVideos from '../../../../Assets/Images/likedvideos.svg';
import Music from '../../../../Assets/Images/music.svg';
import Games from '../../../../Assets/Images/games.svg';
import ShowMore from '../../../../Assets/Images/showmore.svg';

import { NavLink } from "react-router-dom";

import './ToggleFeatures.scss'

function ToggleFeatures() {
  return (
    <>
      <div className="menu-container">
        <ul className="menu-lists">
          <li className="menu-item">
            <NavLink to={'/'} className="menu-item-links">
              <div className="img-container">
                <img src={Home} alt="Home" className='menu-icon' />
              </div>
              <p className='menu-item-desc'>Home</p>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={'/'} className="menu-item-links">
              <div className="img-container">
                <img src={Trending} alt="Home" className='menu-icon' />
              </div>
              <p className='menu-item-desc'>Trending</p>
            </NavLink>
          </li>
          <li className="menu-item subscriptions">
            <NavLink to={'/'} className="menu-item-links">
              <div className="img-container">
                <img src={Subscriptions} alt="Home" className='menu-icon' />
              </div>
              <p className='menu-item-desc'>Subscriptions</p>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={'/'} className="menu-item-links">
              <div className="img-container">
                <img src={Library} alt="Home" className='menu-icon' />
              </div>
              <p className='menu-item-desc'>Library</p>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={'/'} className="menu-item-links">
              <div className="img-container">
                <img src={History} alt="Home" className='menu-icon' />
              </div>
              <p className='menu-item-desc'>History</p>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={'/'} className="menu-item-links">
              <div className="img-container">
                <img src={WatchLater} alt="Home" className='menu-icon' />
              </div>
              <p className='menu-item-desc'>Watch later</p>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={'/'} className="menu-item-links">
              <div className="img-container">
                <img src={Favourites} alt="Home" className='menu-icon' />
              </div>
              <p className='menu-item-desc'>Favourites</p>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={'/'} className="menu-item-links">
              <div className="img-container">
                <img src={LikedVideos} alt="Home" className='menu-icon' />
              </div>
              <p className='menu-item-desc'>Liked videos</p>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={'/'} className="menu-item-links">
              <div className="img-container">
                <img src={Music} alt="Home" className='menu-icon' />
              </div>
              <p className='menu-item-desc'>Music</p>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={'/'} className="menu-item-links">
              <div className="img-container">
                <img src={Games} alt="Home" className='menu-icon' />
              </div>
              <p className='menu-item-desc'>Games</p>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={'/'} className="menu-item-links">
              <div className="img-container">
                <img src={ShowMore} alt="Home" className='menu-icon' />
              </div>
              <p className='menu-item-desc'>Show more</p>
            </NavLink>
          </li>
        </ul>

        <Users/>
      </div>
    </>
  )
}

export default ToggleFeatures;
