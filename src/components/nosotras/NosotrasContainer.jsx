import React from "react";
import classes from "./Nosotras.module.css";
import paoyale from "../../assets/paoyale.jpeg";

export const NosotrasContainer = () => {
  return (
    <div className={`${classes.nosotrasWraper}`}>
      <div className={`${classes.nosotrasInfo}`}>
        <h2 className={`${classes.nosotrasTitle}`}>Nosotras</h2>
        <p className={`${classes.nosotrasText}`}>
          <a href="https://www.instagram.com/somospaoyale/">@somospaoyale </a>es
          una comunidad dedicada a inspirar y brindar herramientas a la mujer de
          hoy, bajo la filosofía de una vida basada en la Organización. <br />{" "}
          <br /> Somos Psicólogas, egresadas de la Universidad Arturo Michelena
          en Valencia - Venezuela, con diferentes estudios en los procesos
          Psico-Emocionales del ser.
        </p>
      </div>
      <div className={`${classes.imgContainer}`}></div>
    </div>
  );
};
