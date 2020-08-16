import React from "react";
import "./style";

export const ViewMediaQueries = () => (
  <section className="container">
    <div className="app">
      <span>
        <h1>Mobile First, Sass & Media Queries</h1>
      </span>
      <div className="mq1">
        <p>{`0 < 480`} </p>
      </div>
      <div className="mq2">
        <p>{`480 < 600`}</p>
      </div>
      <div className="mq3">
        <p>{`600 < 768`}</p>
      </div>
      <div className="mq4">
        <p>{`768 < 992`}</p>
      </div>
      <div className="mq5">
        <p>{`992 < 1382`}</p>
      </div>
      <div className="mq6">
        <p>hi-def</p>
      </div>
      <p>
        <small>
          <em>Resize your browser</em>
        </small>
      </p>
    </div>
  </section>
);
