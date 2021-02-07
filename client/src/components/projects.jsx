import React from 'react';

import AppOne from './appOne.jsx';
import AppTwo from './appTwo.jsx';

var Projects = () => {
  return (
    <div style={{fontFamily:'Montserrat'}}>
      <div style={{ backgroundColor: '#444444', marginTop:'50px', marginLeft:'20%', marginRight:'20%' }}>
        <h1 style={{fontSize: '200%'}}>Here are some apps I built</h1>
        <div style={{ display:'flex' }}>
          <div style={{width: '50%', marginRight: '1%', flex:'1'}}>
            <AppOne />
          </div>
          <div style={{width: '50%', marginLeft: '1%', flex:'1'}}>
            <AppTwo />
          </div>
        </div>
      </div>
    </div>
     )
}

export default Projects;