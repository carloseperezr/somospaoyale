import React from "react";
import { NavBarLinksContainer } from "./NavBarLinksContainer";
import classes from "./NavBar.module.css";

export const NavBarContainer = () => {
  return (
    <div className={`${classes.navBarContainer}`}>
      <NavBarLinksContainer />
    </div>
  );
};
