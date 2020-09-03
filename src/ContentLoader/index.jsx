import React, { useEffect, useState } from "react";
import "./style";

export const ContentLoader = () => {
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
      <div className="spinner__wr">
        <div className="spinner__magic"></div>
      </div>
    )
  );
};
