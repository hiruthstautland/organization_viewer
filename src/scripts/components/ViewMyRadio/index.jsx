import React from "react";
import "./style";

export const ViewMyRadio = () => (
  <main className="player">
    <div className="header">
      <a href="#" className="button">
        <i className="fas fa-bars" aria-hidden="true"></i>
        <span className="sr-only">menu bar</span>
      </a>
      <p>Now Playing</p>
      <a href="#" className="button">
        <i className="fas fa-search" aria-hidden="true"></i>
        <span className="sr-only">Search</span>
      </a>
    </div>
    {/* <!--  header  --> */}
    <img
      src="https://www.buttonmuseum.org/sites/default/files/MU-a-hard-days-night-button_busy_beaver_button_museum.png"
      alt="album art"
      className="art"
    />
    {/* <!--  art  --> */}
    <div className="info">
      <h1>The Beatles</h1>
      <p>Elanor Rigby</p>
    </div>
    {/* <!--  info  --> */}
    <div className="prog">
      <div className="prog-time">
        <p className="left">0:00</p>
        <p className="right">2:06</p>
      </div>
      <div className="prog-bar">
        <div className="prog-bar-inner"></div>
      </div>
    </div>
    {/* <!--  progress  --> */}
    <ul className="buttons">
      <a href="#" className="button button-sm">
        <span className="sr-only">Shuffle</span>
      </a>
      <a href="#" className="button button-md">
        <span className="sr-only">Previous Music</span>
      </a>
      <a href="#" className="button button-lg">
        <span className="sr-only">Pause</span>
      </a>
      <a href="#" className="button button-md">
        <span className="sr-only">Next Music</span>
      </a>
      <a href="#" className="button button-sm">
        <span className="sr-only">Repeat Song</span>
      </a>
    </ul>
    {/* <!--  buttons  --> */}
    <div className="bar"></div>
    {/* <!--  bar  --> */}
  </main>
);
