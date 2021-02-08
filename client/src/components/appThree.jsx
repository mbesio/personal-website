import React from 'react';

import { IoLogoGithub } from 'react-icons/io';
import { MdOpenInNew } from 'react-icons/md';
import { BsDot } from 'react-icons/bs';


var AppThree = () => {
  return (
    <div>
      <div style={{border: '0.5px solid white', borderRadius: '2%', padding: '10px', marginBottom: '50px', height: '100%'}}>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div>
            <a className='icons' style={{ fontSize: '200%', padding: '15px'}} href='https://github.com/mbesio/dev-first' target="_blank" rel="noopener noreferrer">
              <IoLogoGithub />
            </a>
          </div>
        </div>

        <div style={{ alignItems: 'flex-start', paddingBottom: '10px' }}>
          <img style={{ width:'100%' }} src='thumbnail_devfirst.png'/>
        </div>


        <div style={{display:'flex'}}>
          <div >
            <div style={{ fontSize: '150%', fontWeight: '600' }}> Devfirst.io </div>
            <p>An online platform for engineers to find their dream job</p>
          </div>
          </div>
          <div>
          <div style ={{ fontWeight: '600', display: 'flex', justifyContent: 'flex-start' }}>
            <div>React</div>
            <BsDot/>
            <div>Node </div>
            <BsDot/>
            <div>Express </div>
            <BsDot/>
            <div>MySQL </div>
          </div>

        </div>

      </div>
    </div>
     )
}

export default AppThree;