import classes from "./Equilibrium.module.css";
import logo from "../../assets/EquilibriumLogo1.png";

export const EquilibriumContainer = () => {
  return (
    <div className={`${classes.equilibriumInfoContainer}`}>
      <h2>Conoce más</h2>
      <div className={`${classes.textContainer}`}>
        <p>
          Equilibrium es un programa que te brindará las herramientas y
          estrategias necesarias para optimizar tu tiempo y aumentar tu
          productividad, comprendiendo que la Organización no es solo un tema de
          creación de horarios o nuevas rutinas, si no que también involucra
          otras dimensiones del ser. En la actualidad, el ritmo de vida y las
          responsabilidades pueden resultar abrumadoras. Por ello, es esencial
          contar con habilidades efectivas de gestión del tiempo, que te
          permitan vivir a plenitud teniendo momentos para todo.
        </p>
        <div>
          <ul>
            <li className={`${classes.listItem}`}>Organiza tu vida</li>
            <li className={`${classes.listItem}`}>Crea una nueva realidad</li>
            <li className={`${classes.listItem}`}>
              Invierte tu tiempo en lo que amas
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
