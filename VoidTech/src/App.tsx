import React, { useState, useEffect } from "react";
// import { Rocket, Code, Database, Cloud, Shield, Cpu, Linkedin, Twitter, Github, Menu, X } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WorkProcess from "./components/WorkProcess";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white">
      <Navbar scrollPosition={scrollPosition} />
      <Hero />
      <About />
      <Services />
      <WorkProcess />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
