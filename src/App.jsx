import "./App.css";
import { FullPage } from "./views/FullPage";
import { NavBarContainer } from "../src/components/navbar/NavBarContainer";
import { FooterContainer } from "../src/components/footer/FooterContainer";

function App() {
  return (
    <>
      <NavBarContainer />
      <FullPage />
      <FooterContainer />
    </>
  );
}

export default App;
