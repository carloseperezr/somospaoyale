import { NosotrasContainer } from "../components/nosotras/NosotrasContainer";
import classes from "./Nosotras.module.css";
export const NosotrasSection = () => {
  return (
    <div id="nosotras" className={`${classes.nosotrasContainer}`}>
      <NosotrasContainer />
    </div>
  );
};
