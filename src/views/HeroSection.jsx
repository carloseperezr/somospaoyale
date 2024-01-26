import React from "react";
import { HeroContainer } from "../components/hero/HeroContainer";
import classes from "./Hero.module.css";

const HeroSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${classes.heroContainer}`}>
      <HeroContainer />
    </div>
  );
});

export default HeroSection;
