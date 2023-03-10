import React from "react";
import './App.css'
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Alert from "./components/Alert"


function App() {
  return (
      <main className="container">
          <div><Header/></div>
          <div><HeroSection /></div>
          <div><HighlightsSection/></div>
          <div><TestimonialsSection/></div>
          <div><AboutSection/></div>
          <div><Footer/></div>
          <div className="alert"><Alert/></div>
      </main>
  );
}

export default App; 