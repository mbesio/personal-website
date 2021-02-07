import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { RiHomeGearFill } from 'react-icons/ri';
import { GiWhiteBook } from 'react-icons/gi';

var Mainbody = () => {
  return (
  <div>
    <div style={{margin: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flexStart'}}>
      <div style={{ margin: '15px', display: 'flex', alignItems: 'center'}}><IoLogoGithub style={{fontSize: '300%'}}/> <a href="https://github.com/mbesio">@mbesio</a></div>
      <div style={{ margin: '30px', display: 'flex', alignItems: 'center'}} ><IoLogoLinkedin style={{fontSize: '300%'}}/> <a href="https://www.linkedin.com/in/matteo-besio"> @matteo-besio</a></div>
      <div style={{ margin: '30px', display: 'flex', alignItems: 'center'}} ><RiHomeGearFill style={{fontSize: '300%'}}/><a href="https://mutuo-facile.com/">mutuo-facile</a>:a mortgage calculator for the italian market </div>
      <div style={{ margin: '30px',display: 'flex', alignItems: 'center'}} ><GiWhiteBook style={{fontSize: '300%'}}/>fec-link</div>
    </div>
  </div>
  )
}

export default Mainbody;