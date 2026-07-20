import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Project from "./Pages/Project";
import Experiences from "./Pages/Experiences";
import Tools from "./Pages/Tools";
import Thoughts from "./Pages/Thoughts";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/Thoughts" element={<Thoughts />} />
      </Routes>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
