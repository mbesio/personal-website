import React from 'react';

var Footer = () => {
  return (
    <div className='overall' style={{padding: '1.0em', backgroundColor: 'black', color: 'white', position: 'sticky', bottom: '0', zIndex: '1'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{paddingRight: '0.75em'}}>©</div>
          <div style={{ fontSize: '100%', paddingLeft: '0.5em'}}>Matteo Besio</div>
        </div>
      <div style={{alignItems: 'right'}}>Version 0.1</div>
      </div>
     </div>
     )
}

export default Footer;