import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './index.css';

const Projects = () => (
  <div className="Projects">
    <div className="container">
      <h3>Projects</h3>
      <p>Here are some bits and bobs I&apos;ve been working on lately in my spare time:</p>
      <div className="project">
        <Link className="content" to="/projects/youtube-viewer">
          <FontAwesome className="icon" name="youtube-play" tag="i" />
          <h3>YouTube Viewer</h3>
        </Link>
      </div>
      <div className="project">
        <Link className="content" to="/projects/recipe-box">
          <FontAwesome className="icon" name="book" tag="i" />
          <h3>Recipe Box</h3>
        </Link>
      </div>
      <div className="project">
        <Link className="content" to="/projects/matrix-digital-rain">
          <FontAwesome className="icon" name="film" tag="i" />
          <h3>Matrix Digital Rain</h3>
        </Link>
      </div>
      <div className="project">
        <Link className="content" to="/projects/simon-game">
          <FontAwesome className="icon" name="gamepad" tag="i" />
          <h3>Simon Game</h3>
        </Link>
      </div>
      <div className="project">
        <Link className="content" to="/projects/jumpy-block">
          <FontAwesome className="icon" name="gamepad" tag="i" />
          <h3>Jumpy Block</h3>
        </Link>
      </div>
      <div className="project">
        <Link className="content" to="/projects/strimko">
          <FontAwesome className="icon" name="puzzle-piece" tag="i" />
          <h3>Strimko</h3>
        </Link>
      </div>
      <div className="project">
        <Link className="content" to="/projects/weather-app">
          <FontAwesome className="icon" name="sun-o" tag="i" />
          <h3>Weather App</h3>
        </Link>
      </div>
      <div className="project">
        <Link className="content" to="/projects/twitch-status-viewer">
          <FontAwesome className="icon" name="twitch" tag="i" />
          <h3>Twitch Status Viewer</h3>
        </Link>
      </div>
      <div className="project">
        <Link className="content" to="/projects/blueprint-pong">
          <FontAwesome className="icon" name="gamepad" tag="i" />
          <h3>Blueprint Pong</h3>
        </Link>
      </div>
      <p>
        I built this site using React, the source code is <a href="https://github.com/vanillaSlice/mikelowe.xyz">here</a>.
      </p>
    </div>
  </div>
);

export default Projects;
