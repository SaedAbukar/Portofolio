import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/hero/Hero";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
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
