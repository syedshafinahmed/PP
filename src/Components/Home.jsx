import React from "react";
import Hero from "./Hero";
import SkillsGrid from "./SkillsGrid";
import Projects from "./Projects";
import Publications from "./Publications";
import Hobbies from "./Hobbies";
import Connect from "./Connect";
import Education from "./Education";
import Certificates from "./Certificates";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  return (
    <>
      <Hero />
      <SkillsGrid />
      <Projects />
      <Education />
      <Publications />
      <Certificates />
      <Hobbies />
      <Connect />
      <ScrollToTop />
    </>
  );
};

export default Home;

