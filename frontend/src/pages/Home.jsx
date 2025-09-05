import Reveal from "../components/Reveal";
import About from "./about";
import Contact from "./contact";
import Presentation from "./presentation";
import Projects from "./projects";
import Techs from "./techs";

export function Home() {
  return (
    <>
      <div className="section-header">
        <Presentation/>
        <Projects/>
      </div>
      <About/>
      <Techs/>
      <Contact/>
    </>
  );
}
export default Home;
