import React from 'react';

var Intro = () => {
  return (
    <div style={{fontFamily:'Montserrat'}}>
      <div style={{ backgroundColor: '#444444', marginTop:'20px', marginLeft:'20%', marginRight:'20%' }}>


        <div style={{fontSize: '150%', marginRight: '15px'}}>Hi there, my name is </div>
        <div style={{fontSize: '300%', fontWeight: '600'}}> Matteo Besio.</div>

        <p style={{fontSize: '120%'}}>I'm an Italian fullstack software engineer based out of San Francisco. I enjoy building web applications and tinkering with software. Prior to coding, I recreated star-like conditions in a lab as a physicist and restructured European banks during the financial crisis as a management consultant.</p>
        <a className='button' href="mailto:matteo.besio@gmail.com" style={{ textDecoration: 'none'}}>
        <div className='button' style={{border: '2px solid white', borderRadius: '5%', fontSize: '100%', fontWeight: '600', height:'30px', width: '120px', padding: '10px 0px 0px', textAlign: 'center'}}>
        Get in touch
        </div>
        </a>
      </div>
    </div>
     )
}

export default Intro;