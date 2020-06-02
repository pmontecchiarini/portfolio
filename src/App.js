import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
// Import Context
import { LanguageProvider } from './containers/Language';

// Import pages
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Aboutme from "./components/Aboutme/Aboutme";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Welcome} />
          <Route path="/projects" component={Projects} />
          <Route path="/aboutme" component={Aboutme} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
