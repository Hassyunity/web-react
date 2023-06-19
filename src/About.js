import './about.css'
import React from 'react';

const about = {
  name: 'Hassy',
  imageUrl: './7.jpg',
  imageSize: 90,
}
function About() {
  return (
    <>
      <div className="about">
        <h1>{ about.name }</h1>
        <p>
          This is a React app.
        </p>
        <img className='about-image' src = { about.imageUrl } alt= { 'about' + about.name } />
      </div>
    </>
    // <div className="about">
    //   <header className="about-header">
    //     <p>
    //       This is a React app.
    //     </p>
    //   </header>
    // </div>
  );
}

export default About;