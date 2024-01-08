import React from "react";
import { NavBarLinks } from "./NavBarLinks";
import classes from "./NavBar.module.css";
import { Link } from "react-scroll";

export const NavBarLinksContainer = () => {
  return (
    <div className={`${classes.navBarLinksContainer}`}>
      <Link
        to="inicio"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={500}
      >
        <NavBarLinks direction="inicio" route="inicio" />
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
        <NavBarLinks direction="equilibrium" route="equilibrium" />
      </Link>
      <div className={`${classes.navLinkSeparator}`}>
        <p> - </p>
      </div>
      <Link
        to="suscripción"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={500}
      >
        <NavBarLinks direction="suscripción" route="suscripción" />
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
        <NavBarLinks direction="nosotras" route="nosotras" />
      </Link>
    </div>
  );
};
