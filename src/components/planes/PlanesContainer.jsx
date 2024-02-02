import classes from "./Planes.module.css";
import { FaCircleCheck } from "react-icons/fa6";

export const PlanesContainer = () => {
  return (
    <div className={`${classes.planesWraper}`}>
      <h2 className={`${classes.mainTitleContainer}`}>¿Cómo unirme?</h2>
      <div className={`${classes.planInfo}`}>
        <div className={`${classes.stepsListContainer}`}>
          <ul>
            <li>
              <p className={`${classes.listNumber}`}>1</p>{" "}
              <p className={`${classes.listStep}`}>
                Elige el plan de tu preferencia.
              </p>
            </li>
            <li>
              <p className={`${classes.listNumber}`}>2</p>
              <p className={`${classes.listStep}`}>
                Haz click en el botón "Unirme" para realizar el pago a través de
                PayPal.
              </p>
            </li>
            <li>
              <p className={`${classes.listNumber}`}>3</p>
              <p className={`${classes.listStep}`}>
                Envianos un correo con tu nombre, correo electrónico, teléfono y
                comprobante de pago a holapaoyale@gmail.com
              </p>
            </li>
            <li>
              <p className={`${classes.listNumber}`}>4</p>
              <p className={`${classes.listStep}`}>
                Una vez el pago haya sido confirmado, recibirás un correo de
                nosotras con toda la información para que seas parte de esta
                comunidad.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${classes.cardWraper}`}>
        <div className={`${classes.planesContainer}`}>
          <div className={`${classes.basicCard}`}>
            <div className={`${classes.basicCardInfo}`}>
              <h2>Equilibrium</h2>
              <small>Empezemos con buen pie.</small>
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
            <div className={`${classes.cardBTN}`}>
              <a
                target="_blank"
                href="https://www.paypal.com/paypalme/somospaoyale?country.x=CO&locale.x=es_XC"
              >
                {" "}
                <button className={`${classes.basicCardBtn}`}>UNIRME</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
