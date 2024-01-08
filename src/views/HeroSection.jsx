import { HeroContainer } from "../components/hero/HeroContainer";
import classes from "./Hero.module.css";

export const HeroSection = () => {
  return (
    <div id="inicio" className={`${classes.heroContainer}`}>
      <HeroContainer />
    </div>
  );
};
