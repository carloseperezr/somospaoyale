import React, { useRef } from "react";
import { NosotrasContainer } from "../components/nosotras/NosotrasContainer";
import classes from "./Nosotras.module.css";

const NosotrasSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${classes.nosotrasContainer}`}>
      <NosotrasContainer />
    </div>
  );
});

export default NosotrasSection;
