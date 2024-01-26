import React from "react";
import { NavBarLinksContainer } from "./NavBarLinksContainer";
import classes from "./NavBar.module.css";

export const NavBarContainer = ({
  scrollToSection,
  inicioRef,
  equilibriumRef,
  suscripcionRef,
  nosotrasRef,
}) => {
  return (
    <div className={`${classes.navBarContainer}`}>
      <NavBarLinksContainer
        scrollToSection={scrollToSection}
        inicioRef={inicioRef}
        equilibriumRef={equilibriumRef}
        suscripcionRef={suscripcionRef}
        nosotrasRef={nosotrasRef}
      />
    </div>
  );
};
