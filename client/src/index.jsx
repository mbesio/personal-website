import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.jsx';
import Intro from './components/intro.jsx';
import Projects from './components/projects.jsx';
import Footer from './components/footer.jsx';

var App = () => {
  return(
    <div style={{ backgroundColor:'#444444', fontFamily: 'Lato', backgroundColor: '#444444', color: 'white' }}>
      <Header/>
      <Intro/>
      <Projects/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));