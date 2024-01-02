import "./App.css";
import { NavBarContainer } from "./components/navbar/NavBarContainer";
import { FooterContainer } from "./components/footer/FooterContainer";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { FullPage } from "./views/FullPage";

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
        <Route path="/" Component={FullPage} />
      </Routes>
      <FooterContainer />
    </BrowserRouter>
  );
}

export default App;
