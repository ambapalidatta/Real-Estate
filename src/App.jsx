import React from "react";
import { DarkModeProvider } from "./components/DarkModeContexts";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import Contacts from "./sections/Contacts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Clients />
        <Contacts />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;
