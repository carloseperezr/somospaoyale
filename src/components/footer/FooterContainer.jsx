import classes from "./Footer.module.css";
import { FooterNavigation } from "./FooterNavigation";

export const FooterContainer = () => {
  return (
    <div className={`${classes.footerContainer}`}>
      <FooterNavigation />
    </div>
  );
};
