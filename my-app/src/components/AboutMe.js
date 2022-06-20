import React from "react";
import Fall from "./Fall.JPG";
import rainbow from "./rainbow.JPG";

function AboutMe() {
  return (
    <div id="body">
      <section className="introduction">
        <span className="wrap">
          <h1>Introduction</h1>
          <p>
            Hello! My name is Guanghua Yang, a fourth-year computer science
            student. I'm from Qingdao, Shandong Province, China. This is my last
            term at UBC, and I am going to pursue my master degree at SFU. My
            career goal is to becoming a full stack software enigneer. As for
            extracurricularlife, I love nature, animals, and cars. I have been
            to many places in Canada and US, including Banff National Park,
            Niagara Fall, Olympic National Park, and Big Four Ice Caves.
          </p>
        </span>
        <div className="row">
          <div className="column">
            <img src={rainbow} alt="rainbow" width="80%"></img>
            <figcaption>
              Rainbow, picture took at Burnaby in Feburary
            </figcaption>
          </div>
          <div className="column">
            <img src={Fall} alt="Niagara Fall" width="80%"></img>
            <figcaption>Niagara Fall, picture took in January</figcaption>
          </div>
        </div>
      </section>
      <section className="contact">
        <h1>Social networks</h1>
        <ul className="social">
          <li>
            <a href="https://github.com/Gavinygh">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/guanghua-yang-533034174/">
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutMe;
