import React from "react";
import { home , logo ,  } from '../../Assets/Images'
import ToggleFeatures from "../Toggle-Features/ToggleFeatures";

const Header = () => {
  return (
    <>
      <ToggleFeatures />
      <Header>
        <div className="container header-container">
          <div className="header-left">
            <button className="header-toggle">
              <img src="" alt="Header Toggle" className="header-toggle" />
            </button>

            <div className="header-form">
              <form className="form">
                  <div className="header-input-container">
                    <input type="text" value={} />
                    <img src={} alt="Header Search Input" />
                  </div>
              </form>
            </div>
          </div>
          <div className="header-right"></div>
        </div>
      </Header>
    </>
  );
};

export default Header;
