import "./App.css";
import { NavBarContainer } from "../src/components/navbar/NavBarContainer";
import { FooterContainer } from "../src/components/footer/FooterContainer";
import { useEffect, useRef, useState } from "react";
import HeroSection from "./views/HeroSection";
import EquilibriumSection from "./views/EquilibriumSection";
import PlanesSection from "./views/PlanesSection";
import NosotrasSection from "./views/NosotrasSection";

function App() {
  const [activeSection, setActiveSection] = useState("");

  const inicioRef = useRef(null);
  const equilibriumRef = useRef(null);
  const suscripcionRef = useRef(null);
  const nosotrasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const yOffSet = window.scrollY;
      const sections = [
        { ref: inicioRef, name: "inicio" },
        { ref: equilibriumRef, name: "equilibrium" },
        { ref: suscripcionRef, name: "suscripcion" },
        { ref: nosotrasRef, name: "nosotras" },
      ];

      let found = false;

      for (const section of sections) {
        if (
          section.ref &&
          section.ref.current &&
          yOffSet >= section.ref.current.offsetTop &&
          yOffSet <
            section.ref.current.offsetTop + section.ref.current.clientHeight
        ) {
          setActiveSection(section.name);
          found = true;
          break;
        }
      }
      if (!found) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inicioRef, equilibriumRef, suscripcionRef, nosotrasRef]);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBarContainer
        scrollToSection={scrollToSection}
        inicioRef={inicioRef}
        equilibriumRef={equilibriumRef}
        suscripcionRef={suscripcionRef}
        nosotrasRef={nosotrasRef}
      />
      <HeroSection ref={inicioRef} />
      <EquilibriumSection ref={equilibriumRef} />
      <PlanesSection ref={suscripcionRef} />
      <NosotrasSection ref={nosotrasRef} />
      <FooterContainer />
    </>
  );
}

export default App;
