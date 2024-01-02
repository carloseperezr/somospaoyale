import { EquilibriumContainer } from "../components/equilibrium/EquilibriumContainer";
import classes from "./Equilibrium.module.css";

export const EquilibriumSection = () => {
  return (
    <div id="equilibrium" className={`${classes.equilibriumContainer}`}>
      <EquilibriumContainer />
    </div>
  );
};
