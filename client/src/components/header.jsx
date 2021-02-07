import React from 'react';

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

var Header = () => {
  return (
      <div style={{ backgroundColor: '#444444', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding:'50px', position: 'sticky', top: '0', zIndex: '1'}}>
        <div>
          <a className='icons' style={{ fontSize: '200%', padding: '30px'}} href='https://github.com/mbesio'>
            <IoLogoGithub style={{ fontSize: '300%' }}/>
          </a>
        </div>

        <div>
          <a className='icons' style={{ fontSize: '200%', padding: '30px'}} href='https://www.linkedin.com/in/matteo-besio'>
            <IoLogoLinkedin style={{ fontSize: '300%' }}/>
          </a>
        </div>
    </div>
  )
}

export default Header;