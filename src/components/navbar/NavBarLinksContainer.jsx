import React from "react";
import { NavBarLinks } from "./NavBarLinks";
import classes from "./NavBar.module.css";
import { Link } from "react-scroll";

export const NavBarLinksContainer = () => {
  return (
    <div className={`${classes.navBarLinksContainer}`}>
      <Link
        to="hero"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={500}
      >
        <NavBarLinks direction="Inicio" route="hero" />
      </Link>
      <div className={`${classes.navLinkSeparator}`}>
        <p> - </p>
      </div>{" "}
      <Link
        to="equilibrium"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={500}
      >
        <NavBarLinks direction="Equilibrium" route="equilibrium" />
      </Link>
      <div className={`${classes.navLinkSeparator}`}>
        <p> - </p>
      </div>
      <Link
        to="planes"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={500}
      >
        <NavBarLinks direction="Suscripción" route="planes" />
      </Link>
      <div className={`${classes.navLinkSeparator}`}>
        <p> - </p>
      </div>{" "}
      <Link
        to="nosotras"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={500}
      >
        <NavBarLinks direction="Nosotras" route="nosotras" />
      </Link>
    </div>
  );
};
