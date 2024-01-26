import React from "react";
import { NavBarLinks } from "./NavBarLinks";
import classes from "./NavBar.module.css";

export const NavBarLinksContainer = ({
  scrollToSection,
  inicioRef,
  equilibriumRef,
  suscripcionRef,
  nosotrasRef,
}) => {
  return (
    <div className={`${classes.navBarLinksContainer}`}>
      <div onClick={() => scrollToSection(inicioRef)}>
        <NavBarLinks direction="Inicio" />
      </div>
      <div className={`${classes.navLinkSeparator}`}>
        <p> - </p>
      </div>{" "}
      <div onClick={() => scrollToSection(equilibriumRef)}>
        <NavBarLinks direction="Equilibrium" />
      </div>
      <div className={`${classes.navLinkSeparator}`}>
        <p> - </p>
      </div>
      <div onClick={() => scrollToSection(suscripcionRef)}>
        <NavBarLinks direction="Suscripción" />
      </div>
      <div className={`${classes.navLinkSeparator}`}>
        <p> - </p>
      </div>{" "}
      <div onClick={() => scrollToSection(nosotrasRef)}>
        <NavBarLinks direction="Nosotras" />
      </div>
    </div>
  );
};
