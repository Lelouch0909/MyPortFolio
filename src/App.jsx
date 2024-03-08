import React, { useState } from "react";
import "./App.css"
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

import { themeContext } from ".";

export function App() {

  let [dark, setTheme] = useState(true)



  return (
    <React.StrictMode>

      <themeContext.Provider value={ dark }>

        <div className="app-ombre" >
          <div className="App" style={ dark ? { background: 'var(--fBlack)', color: "#fff" } : { background: 'var(--fWhite)', color: "#090909" } } >
            <Navbar setDark={ () => dark ? setTheme(false) : setTheme(true) } ></Navbar>
            <Intro></Intro>
            <Services></Services>
            <Portfolio></Portfolio>
            <Skills></Skills>
            <Contact></Contact>
          </div>
          <Footer></Footer>

        </div>
      </themeContext.Provider>
    </React.StrictMode>
  );
}

