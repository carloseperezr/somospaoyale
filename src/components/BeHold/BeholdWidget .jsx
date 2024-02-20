import React, { useEffect } from "react";
import classes from "./BeHold.module.css";

const BeholdWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://w.behold.so/widget.js";
    script.type = "module";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <figure
      className={`${classes.beHold}`}
      data-behold-id="5fVWWYFSgCfNTuoRnFBk"
    ></figure>
  );
};

export default BeholdWidget;
