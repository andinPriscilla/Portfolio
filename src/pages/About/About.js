import React from 'react'
import blackgirl from "../../images/blackgirl.jpeg";
import "./About.css"

function About() {
    return (
        
        <div className=" container intro" id="home">
          <div className="firstintro">
            <h1>Hello, I am <strong>Priscilla</strong></h1>
            <h2 className="front">Front-end Developer</h2>
            <p>
              It's all about problems and Solutions.Just don't think come for it.
              Innovation is my passion
            </p>
          </div>
          <div className="secondintro">
            <div className="wrapper">
              <div className="imgtop1">Developer</div>
              <img src={blackgirl} alt="" width="300px" className="img1" />
              <div className="imgtop2">Designer</div>
            </div>
          </div>
        </div>
      
    )
}

export default About
