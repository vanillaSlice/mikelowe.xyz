import React from 'react';

import cv from './cv.pdf';

import './index.css';

const About = () => (
  <div className="About">
    <div className="container">
      <h3>About Me</h3>
      <h4>Jobs</h4>
      <p>
        I have been a developer for <a href="https://www.jisc.ac.uk/">Jisc</a> since 2014 working
        on <a href="https://www.jisc.ac.uk/historical-texts">Historical Texts</a> and <a href="https://www.jisc.ac.uk/journal-archives">Journal Archives</a>.
      </p>
      <h4>Education</h4>
      <p>
        I Graduated with a BSc in Computer Science from The University of Liverpool in 2014.
      </p>
      <h4>Likes</h4>
      <p>
        Stephen King, My Bloody Valentine (the band of course), and terrible films.
      </p>
      <h4>Dislikes</h4>
      <p>
        Anything that isn&apos;t a Krispy Kreme.
      </p>
      <h4>E-mail</h4>
      <p>
        <a href="mailto:mikelowedev@gmail.com">mikelowedev@gmail.com</a> (memes are welcome).
      </p>
      <h4>CV</h4>
      <p>
        Read it <a href={cv}>here</a>.
      </p>
      <p>
        <em>...hmmmm I wonder if this site has a Konami code Easter egg...</em>
      </p>
    </div>
  </div>
);

export default About;
