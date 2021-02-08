import React from 'react';

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

var Header = () => {
  return (
      <div style={{ backgroundColor: '#444444', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding:'20px', top: '0', zIndex: '1'}}>
        <div>
          <a className='icons' style={{ fontSize: '100%', padding: '30px'}} href='https://github.com/mbesio' target="_blank" rel="noopener noreferrer">
            <IoLogoGithub style={{ fontSize: '250%' }}/>
          </a>
        </div>

        <div>
          <a className='icons' style={{ fontSize: '100%', padding: '30px'}} href='https://www.linkedin.com/in/matteo-besio' target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin style={{ fontSize: '250%' }}/>
          </a>
        </div>
    </div>
  )
}

export default Header;