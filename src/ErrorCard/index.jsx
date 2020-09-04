import React from "react";
import PropTypes from "prop-types";

import "./style";

export const ErrorCard = ({ error }) => (
  <section className="error__card">
    <strong className="error__title">Oi, rusk i pipa!</strong>
    <div className="error__msg">
      Feilmelding: <span className="error__msg-desc">{error}</span>
      <br />
      Valideringsfeil: <span className="error__msg-desc">{"No"}</span>
    </div>
    <br />
    <span>
      Om feilen vedvarer kontakt meg på:
      <a email="helpdesk@me.com"> helpdesk@me.com</a>
    </span>
  </section>
);

ErrorCard.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
