import React from 'react';

var Intro = () => {
  return (
    <div style={{fontFamily:'Montserrat'}}>
      <div style={{ backgroundColor: '#444444', marginTop:'20px', marginLeft:'20%', marginRight:'20%' }}>

        <p style={{fontSize: '150%'}}>Hi, my name is </p>
        <h1 style={{fontSize: '300%'}}>Matteo Besio,</h1>
        <h1 style={{fontSize: '300%'}}>I am a fullstack software engineer</h1>
        <p style={{fontSize: '150%'}}>I'm based in San Francisco, CA and enjoy building web applications and tinkering with software.
        I'm originally from Milan, Italy and lived in Dubai, UAE before moveing to the Bay Area. I worked across a variety of business roles before moving into software engineering.</p>
        <a className='icons' href="mailto:matteo.besio@gmail.com" style={{ textDecoration: 'none'}}>
        <div className='button' style={{border: '2px solid white', borderRadius: '8%', fontSize: '150%', height:'30px', width: '150px', padding: '20px'}}>
        Get in touch
        </div>
        </a>
      </div>
    </div>
     )
}

export default Intro;