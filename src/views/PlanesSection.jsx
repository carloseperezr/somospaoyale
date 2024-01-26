import React, { useRef } from "react";
import { PlanesContainer } from "../components/planes/PlanesContainer";
import classes from "./Planes.module.css";

const PlanesSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${classes.planesContainer}`}>
      <PlanesContainer />
    </div>
  );
});

export default PlanesSection;
