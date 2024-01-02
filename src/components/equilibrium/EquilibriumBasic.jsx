import classes from "./Equilibrium.module.css";

export const EquilibriumBasic = () => {
  return (
    <div className={`${classes.equilibriumCardBasic}`}>
      <div className={`${classes.equilibriumCardTitle}`}>
        <h3>Basico</h3>
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
