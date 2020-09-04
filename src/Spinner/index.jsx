import React, { useEffect, useState } from "react";
import "./style";

export const Spinner = () => {
  const [spinner, setSpinner] = useState(null);

  useEffect(() => {
    setSpinner(true);
    let timer = setTimeout(() => setSpinner(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    spinner && (
      <div className="spinner">
        <span className="spinner__inner-1"></span>
        <span className="spinner__inner-2"></span>
        <span className="spinner__inner-3"></span>
      </div>
    )
  );
};
