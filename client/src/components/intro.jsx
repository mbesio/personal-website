import React from 'react';

var Intro = () => {
  return (
    <div style={{fontFamily:'Montserrat'}}>
      <div style={{ backgroundColor: '#444444', marginTop:'20px', marginLeft:'20%', marginRight:'20%' }}>

        <div style={{display:'flex', alignItems:'baseline'}}>
        <p style={{fontSize: '150%', marginRight: '15px'}}>Hi, my name is </p>
        <h1 style={{fontSize: '300%'}}> Matteo Besio.</h1>
        </div>
        <p style={{fontSize: '120%'}}>I am a fullstack software engineer. I'm based in San Francisco, CA and enjoy building web applications and tinkering with software.
        I'm originally from Milan, Italy and lived in Dubai, UAE before moving to the Bay Area. I have a Masters in Physics and worked across a variety of business roles before moving into software engineering.</p>
        <a className='button' href="mailto:matteo.besio@gmail.com" style={{ textDecoration: 'none'}}>
        <div className='button' style={{border: '2px solid white', borderRadius: '5%', fontSize: '70%', fontWeight: '600', height:'15px', width: '80px', padding: '5px', textAlign: 'center'}}>
        Get in touch
        </div>
        </a>
      </div>
    </div>
     )
}

export default Intro;