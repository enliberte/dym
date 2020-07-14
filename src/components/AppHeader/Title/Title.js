import React from 'react';
import logo from '../../../img/logo.png';

const AppTitle = () => {
  return (
      <div>
          <div className='app-header-title-container'>
              <div className='app-header-title-item'>
                  <img className='app-header-logo' src={logo}/>
              </div>
              <div className='app-header-title-item app-header-title'>
                  <span className='app-header-text'>LOUNGE ROOM | Кальянная | Ярославль</span>
              </div>
          </div>
      </div>
  );
}

export default AppTitle;
