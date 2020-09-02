import React from "react";
import "./style";

export const ErrorCard = (error) => {
  const { errMsg, errValidation } = error.error;
  console.log("hello", error.error);
  console.log("em", error.errMsg);
  console.log("em", errValidation);
  return (
    <section className="error__card">
      <strong className="error__title">Oi, rusk i pipa!</strong>
      <div className="error__msg">
        Feilmelding: <span className="error__msg-desc">{errMsg}</span>
        <br />
        Valideringsfeil:{" "}
        <span className="error__msg-desc">{errValidation}</span>
      </div>
      <br />
      <span>
        Om feilen vedvarer kontakt meg på:
        <a email="helpdesk@me.com"> helpdesk@me.com</a>
      </span>
    </section>
  );
};
