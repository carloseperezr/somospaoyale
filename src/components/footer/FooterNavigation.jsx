import classes from "./Footer.module.css";

export const FooterNavigation = () => {
  return (
    <div className={`${classes.footerNav}`}>
      <h3>Síguenos</h3>
      <div className={`${classes.footerIcons}`}>
        <a href="https://www.instagram.com/somospaoyale/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLOsksANOj3BW-8LMmw0eVQzIMDkmkTTg99A&usqp=CAU"
            alt="Instagram"
          />
        </a>
        <a href="https://msha.ke/somospaoyale">
          <img
            src="https://play-lh.googleusercontent.com/P3Mdnf2GWY3lcJtp4R8Arre_TTRbz-aEPh7Y4DhFsLJvSiDCT3UhlM-CNo6dDdz71g"
            alt="Milkshake"
          />
        </a>
      </div>
    </div>
  );
};
