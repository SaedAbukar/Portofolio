import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            backgroundColor: "var(--secondary-bg)",
            color: "var(--text-color)",
            borderRadius: "8px",
            border: "1px solid var(--text-color)",
          },
        }}
      />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
