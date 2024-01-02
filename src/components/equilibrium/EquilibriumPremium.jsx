import React from "react";
import classes from "./Equilibrium.module.css";

export const EquilibriumPremium = () => {
  return (
    <div className={`${classes.equilibriumCardPremium}`}>
      <div className={`${classes.equilibriumCardTitle}`}>
        <h3>Premium</h3>
      </div>
      <div className={`${classes.equilibriumListWraper}`}>
        <ul>
          <li>caracteritica 1</li>
          <li>caracteritica 2</li>
          <li>caracteritica 3</li>
          <li>caracteritica 4</li>
        </ul>
      </div>
    </div>
  );
};
