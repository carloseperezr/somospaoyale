import classes from "./NavBar.module.css";

export const NavBarLinks = ({ direction }) => {
  return (
    <div className={`${classes.navBarLinks}`}>
      <p>{direction}</p>
    </div>
  );
};
