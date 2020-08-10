import React from "react";
import "./App.css";

// Import Context
import { LanguageProvider } from './containers/Language';

// Import pages
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Aboutme from "./components/Aboutme/Aboutme";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";
import Articles from "./components/Articles/Articles";

function App() {

  return (
    <LanguageProvider>
        <div className="App">
          <Header />
          <Welcome/>
          <Aboutme/>
          <Projects/>
          <Articles/>
          <Contact/>
          <Footer />
        </div>
    </LanguageProvider>
  );
}

export default App;
