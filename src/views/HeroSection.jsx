import { HeroContainer } from "../components/hero/HeroContainer";
import classes from "./Hero.module.css";

export const HeroSection = () => {
  return (
    <div id="hero" className={`${classes.heroContainer}`}>
      <HeroContainer />
    </div>
  );
};
