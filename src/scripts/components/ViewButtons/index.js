import React from "react";
import "./style";

export const ViewButtons = () => (
  <section className="container__buttons">
    <h1>Button Hover Effects</h1>
    <div className="container__buttons-hover">
      <a href="https://twitter.com/Dave_Conner" className="buttons btn-1">
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        Hover
      </a>
      <a href="#" className="buttons btn-2">
        Hover
      </a>
      <a href="#" className="buttons btn-3">
        Hover
      </a>
      <a href="#" className="buttons btn-4">
        <span>Hover</span>
      </a>
      <a href="#" className="buttons btn-5">
        <span>H</span>
        <span>O</span>
        <span>V</span>
        <span>e</span>
        <span>r</span>
      </a>
    </div>
  </section>
);
