import React from 'react';

import { IoLogoGithub } from 'react-icons/io';
import { MdOpenInNew } from 'react-icons/md';



var AppTwo = () => {
  return (
    <div>
      <div style={{border: '0.5px solid white', borderRadius: '2%', padding: '10px', marginBottom: '50px', height: '100%'}}>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div>
            <a className='icons' style={{ fontSize: '200%', padding: '15px'}} href='https://github.com/Sweet-Treat/barnesandundignifiedItemSelection' target="_blank" rel="noopener noreferrer">
              <IoLogoGithub />
            </a>
          </div>
          <div>
            <a className='icons' style={{ fontSize: '200%', padding: '15px'}} href='https://mutuo-facile.com/' target="_blank" rel="noopener noreferrer">
              <MdOpenInNew />
            </a>
          </div>
        </div>

        <div style={{ alignItems: 'flex-start', paddingBottom: '10px' }}>
          <img style={{ width:'100%' }} src='thumbnail_book.png'/>
        </div>


        <div style={{display:'flex'}}>
          <div >
            <div style={{ fontSize: '150%', fontWeight: '600' }}> Barnes and Undignified </div>
            <p style={{paddingBottom: '16px'}}>An online book store</p>
          </div>
          </div>
          <div>
          <div style ={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div>React</div>
            <div>Node </div>
            <div>Express </div>
            <div>Mongo </div>
          </div>
        </div>

      </div>
    </div>
     )
}

export default AppTwo;