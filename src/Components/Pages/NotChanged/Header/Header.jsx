import React from 'react';

import Logo from "../../../../Assets/Images/logo.svg";
import LiveTranslating from '../../../../Assets/Images/livetranslater.svg';
import Dots from '../../../../Assets/Images/dots.svg';
import Bell from '../../../../Assets/Images/bell.svg';
import User from '../../../../Assets/Images/userpic.svg';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import { Context as ToggleContext} from '../../../../Context/Toggle/Toggle'

import { NavLink } from "react-router-dom";

import "./header.scss"
import '../Toggle-Features/ToggleFeatures.scss'


function Header() {

    const { toggleButton } = React.useContext(ToggleContext);

    const handleClick = () => { 
        toggleButton.current.classList.add("close");
    };

  return (
    <>
      <header className='header'>
        <div className="container header-container">
            <div className="header-left">
                <div className='header-logos'>
                    <Paper
                        className="input"
                        component="form"
                        sx={{ p: '0', display: 'flex', alignItems: 'center', boxShadow: 0}}
                    >
                        <IconButton  onClick={handleClick} sx={{ p: '1px' , boxShadow: 0 }} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Paper>
                    <a className='youtubelogo'>
                        <img src={Logo} alt="Youtube Logo" className='youtube-logo-img' width='116' height='25' />
                    </a>
                </div>

                <div className="header-form">
                    <form className="form">
                        <div className="header-input-container">
                            <Paper
                                className="input"
                                component="form"
                                sx={{ p: '0', display: 'flex', alignItems: 'center', width: 600 , borderRadius: '22px' , backgroundColor: '#EBEBEB' , boxShadow: 0}}
                            >
                                <InputBase
                                    id="outlined-size-small"
                                    size="small"
                                    variant="outlined"
                                    sx={{ flex: 1 , marginLeft: '23px' , marginTop: '5x'}}
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'Search' }}
                                />
                                <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </div>
                    </form>
                </div>
          </div>
          <div className='header-right'>
                <NavLink to={'/'} href="" className='header-livetranslating'>
                    <img src={LiveTranslating} alt="Live Translating" className='live-img'  width='27' height='20' />
                </NavLink>
                <NavLink to={'/'} href="" className='header-dots'>
                    <img src={Dots} alt="Dots" className='dots-img'  width='21' height='21' />
                </NavLink>
                <NavLink to={'/'} href="" className='header-bell'>
                    <img src={Bell} alt="Bell" className='bell-img'  width='22' height='26' />
                </NavLink>
                <NavLink to={'/'} href="" className='header-user-img-link'>
                    <img src={User} alt="User Image" className='user-img'  width='40' height='40' />
                </NavLink>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header;
