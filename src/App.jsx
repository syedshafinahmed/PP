import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ProjectDetails from "./Components/ProjectDetails";
import AllProjects from "./Components/AllProjects";

function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: "ease-out-cubic" });
    setTimeout(() => AOS.refresh(), 100);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
