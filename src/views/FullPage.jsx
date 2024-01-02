import React from "react";
import { HeroSection } from "./HeroSection";
import { EquilibriumSection } from "./EquilibriumSection";
import { NosotrasSection } from "./NosotrasSection";
import { PlanesSection } from "./PlanesSection";

export const FullPage = () => {
  return (
    <div>
      <HeroSection />
      <EquilibriumSection />
      <PlanesSection />
      <NosotrasSection />
    </div>
  );
};
