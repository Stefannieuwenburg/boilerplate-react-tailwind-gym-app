import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Plans from "./components/Plans";
import About from "./components/About";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Plans />
      <About />
      <Trainers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
