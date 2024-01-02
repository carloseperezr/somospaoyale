import React from "react";
import classes from "./Hero.module.css";
import { Fade } from "react-swift-reveal";
import logo from "../../assets/EquilibriumLogo1.png";

export const HeroContainer = () => {
  return (
    <div className={`${classes.heroContainer}`}>
      <div className={`${classes.heroInfoContainer}`}>
        <Fade duration={2000}>
          <img src={logo} alt="Equilibrium Logo" />
          <a
            className={`${classes.externalLink}`}
            href="https://www.instagram.com/somospaoyale/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>@somospaoyale</p>
          </a>
        </Fade>
      </div>
      <div className={`${classes.heroC2A}`}>
        <Fade duration={3000}></Fade>
      </div>
    </div>
  );
};
