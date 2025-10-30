import { useEffect } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import SkillsGrid from './Components/SkillsGrid'
import AOS from 'aos';
import "aos/dist/aos.css";
import Projects from './Components/Projects'
import Publications from './Components/Publications'
import Hobbies from './Components/Hobbies'
import Connect from './Components/Connect'
import Footer from './Components/Footer'

function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: "ease-out-cubic" });
    setTimeout(() => AOS.refresh(), 100);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <SkillsGrid></SkillsGrid>
      <Projects></Projects>
      <Publications></Publications>
      <Hobbies></Hobbies>
      <Connect></Connect>
      <Footer></Footer>
    </>
  )
}

export default App
