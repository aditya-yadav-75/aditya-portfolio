import { useState } from "react";
import { motion, useScroll } from "framer-motion";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-all duration-500 ${
        darkMode
          ? "bg-[#050816] text-white"
          : "bg-[#f8fafc] text-black"
      }`}
    >
      {/* Background Effects */}

      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          top-20
          right-20
          w-[450px]
          h-[450px]
          border
          border-blue-500/20
          rounded-full
          "
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          bottom-20
          left-20
          w-[350px]
          h-[350px]
          border
          border-purple-500/20
          rounded-full
          "
        />
      </div>
      <CustomCursor />
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      
      <About />

      <Education />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;