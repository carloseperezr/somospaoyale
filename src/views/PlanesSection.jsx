import { PlanesContainer } from "../components/planes/PlanesContainer";
import classes from "./Planes.module.css";

export const PlanesSection = () => {
  return (
    <div id="suscripción" className={`${classes.planesContainer}`}>
      <PlanesContainer />
    </div>
  );
};
