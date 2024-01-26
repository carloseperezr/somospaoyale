import React, { useRef } from "react";
import { EquilibriumContainer } from "../components/equilibrium/EquilibriumContainer";
import classes from "./Equilibrium.module.css";

const EquilibriumSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${classes.equilibriumContainer}`}>
      <EquilibriumContainer />
    </div>
  );
});

export default EquilibriumSection;
