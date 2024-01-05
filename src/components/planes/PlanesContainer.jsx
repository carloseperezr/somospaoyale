import classes from "./Planes.module.css";
import { FaCircleCheck } from "react-icons/fa6";

export const PlanesContainer = () => {
  return (
    <div className={`${classes.planesWraper}`}>
      <h2 className={`${classes.titleContainer}`}>¿Cómo unirme?</h2>
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
      <div className={`${classes.cardWraper}`}>
        <h2 className={`${classes.titleContainer}`}>Planes</h2>
        <div className={`${classes.planesContainer}`}>
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
          </div>
          <div className={`${classes.premiumCard}`}>
            <div className={`${classes.premiumCardInfo}`}>
              <h2>Premium</h2>
              <small>
                Todas las herramientas para una mejor versión de ti.
              </small>
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
          </div>
        </div>
      </div>
      <a
        target="_blank"
        href="https://www.paypal.com/paypalme/somospaoyale?country.x=CO&locale.x=es_XC"
      >
        <button className={`${classes.premiumCardBtn}`}>Unirme</button>
      </a>
    </div>
  );
};
