import React, { useRef } from "react";
import { NosotrasContainer } from "../components/nosotras/NosotrasContainer";
import classes from "./Nosotras.module.css";
import BeholdWidget from "../components/BeHold/BeholdWidget ";

const NosotrasSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${classes.nosotrasContainer}`}>
      <NosotrasContainer />
      <BeholdWidget />
    </div>
  );
});

export default NosotrasSection;
