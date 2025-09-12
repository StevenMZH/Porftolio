import Reveal from "../components/Reveal";

export function About() {
  return (
    <div className="section about">
        <p className="title">About Me</p>
        <Reveal className="description">
          <p>
            I’m Steven Mendoza, a Cybernetic Electronic Engineering student passionate about building software platforms and applications that bring together software development, mathematical modeling, and electronics. I enjoy creating solutions that integrate theory and practice, transforming abstract concepts into tools with real-world impact.
          </p>
          <br/>
          <p>
            With experience as a Fullstack Web Developer and knowledge in DevOps practices, I design, develop, and deploy applications that are scalable and efficient. At every stage, from system design and production to continuous deployment. I apply principles of system analysis and design to ensure structured, optimized, and reliable solutions for complex problems.
          </p>
        </Reveal>
    </div>
  );
}
export default About;
