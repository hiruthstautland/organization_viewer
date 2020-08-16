import React from "react";
import "./style";

export const ViewButtons = () => (
  <div className="container container__btns">
    <section className="buttons">
      <h1>Button Hover Effects</h1>
      <div className="container">
        <a href="https://twitter.com/Dave_Conner" className="btn btn-1">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          Hover
        </a>
        {/* <!--svg hover inspired by https://codepen.io/karimbalaa/pen/qERbBY?editors=110 --> */}
        <a href="#" className="btn btn-2">
          Hover
        </a>
        <a href="#" className="btn btn-3">
          Hover
        </a>
        <a href="#" className="btn btn-4">
          <span>Hover</span>
        </a>
        <a href="#" className="btn btn-5">
          Hover
        </a>
      </div>
      <p>
        Follow on
        <a href="#" target="_blank">
          Twitter
        </a>
      </p>
    </section>
  </div>
);
