import classes from "./Planes.module.css";
import { FaCircleCheck } from "react-icons/fa6";

export const PlanesContainer = () => {
  return (
    <div className={`${classes.planesWraper}`}>
      <h1 className={`${classes.titleContainer}`}>Planes</h1>
      <div className={`${classes.cardWraper}`}>
        <div className={`${classes.basicCard}`}>
          <div className={`${classes.basicCardInfo}`}>
            <h2>Básico</h2>
            <small>Lo necesario para iniciar.</small>
          </div>
          <div className={`${classes.basicPrice}`}>
            <h2>$5</h2>
            <small>mensuales</small>
          </div>
          <div className={`${classes.basicList}`}>
            <ul>
              <li>
                <FaCircleCheck />
                <span> Plantilla personalizada Notion</span>
              </li>
              <li className={`${classes.listDetail}`}></li>
              <li>
                <FaCircleCheck />
                <span>Tutorial de cómo usarlo</span>
              </li>
            </ul>
          </div>
          <div className={`${classes.btnWraper}`}>
            <button className={`${classes.basicCardBtn}`}>Unirme</button>
          </div>
        </div>
        <div className={`${classes.premiumCard}`}>
          <div className={`${classes.premiumCardInfo}`}>
            <h2>Premium</h2>
            <small>Todas las herramientas para una mejor versión de ti.</small>
          </div>
          <div className={`${classes.premiumPrice}`}>
            <h2>$14.99</h2>
            <small>mensuales</small>
          </div>
          <div className={`${classes.premiumList}`}>
            <ul>
              <li>
                <FaCircleCheck />
                <span>Telegram Exclusivo</span>
              </li>
              <li>
                <FaCircleCheck />
                <span>Agenda Digital Notion</span>
              </li>
              <li>
                <FaCircleCheck />
                <span>4 Mini Clases</span>
              </li>
              <li>
                <FaCircleCheck />
                <span>2 Audios con Visualizaciones</span>
              </li>
              <li>
                <FaCircleCheck />
                <span>Preguntas y Respuestas</span>
              </li>
              <li>
                <FaCircleCheck />
                <span>Actividades y Retos</span>
              </li>
              <li>
                <FaCircleCheck />
                <span>Wallpapers</span>
              </li>
            </ul>
          </div>
          <div className={`${classes.btnWraper}`}>
            <button className={`${classes.premiumCardBtn}`}>Unirme</button>
          </div>
        </div>
      </div>
    </div>
  );
};
