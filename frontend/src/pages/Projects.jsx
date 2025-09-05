import ProjectPreview from "../components/projects/ProjectPreview";

export function Projects() {
  return (
    <div className="section projects">
        <p className="title text-hl">Projects</p>

        {/* <iframe className="eulerian" src="https://eulerian-hades.purpleblue.site/solver" loading="lazy"></iframe>
        <iframe className="quackternion" src="https://quackternion.purpleblue.site/solver" loading="lazy"></iframe>
        <iframe className="quack-ai" src="https://quack-ai.purpleblue.site/solver" loading="lazy"></iframe>
         */}
        <div className="cards">
            {/* <ProjectPreview img_url={"parabolic.svg"} name="Eulerian Hades" description={"A Learning and Problem Solver Platform for engineering students"}/> */}
            <ProjectPreview main_img={"eulerian/eulerian_preview.png"} project_url={"https://eulerian-hades.purpleblue.site/home"} repo_url={"https://github.com/StevenMZH/Math_Solver.git"} name="Eulerian Hades" description={"A Learning and Problem Solver Platform for engineering students"} images={
              [
                "eulerian/eulerian_preview.png",
                "eulerian/eulerian-1.png",
                "eulerian/eulerian-2.png",
                "eulerian/eulerian-0.png"
              ]
            }/>
            <ProjectPreview main_img={"hermes/hermes_preview.png"} project_url={"https://pypi.org/project/hermes-deployer/"} repo_url={"https://github.com/StevenMZH/DHermes.git"} name="hermes-deployer" description={"A DevOps-as-Code solution for automating multi-server deployments in App Service Environments. Simplifies environment management, infrastructure setup, and CI/CD."} images={
              [
                "hermes/hermes_preview.png"
              ]
            }/>
            <ProjectPreview main_img={"quackternion/quackternion_preview.png"} project_url={"https://quackternion.purpleblue.site/"} repo_url={"https://github.com/StevenMZH/Quackternion.git"} name="Quackternion" description={"Quackternion is an interactive application for simulating objects in a 3D plane, applying spatial transformations using quaternions. It allows exporting the solution procedure in PDF or LaTeX."} images={
              [
                "quackternion/quackternion_preview.png", 
                "quackternion/quackternion-1.png", 
              ]
            }/>
        </div>
    </div>
  );
}
export default Projects;