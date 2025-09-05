import { useState, useEffect, useRef } from "react";
import Project from "./Project";
import DesktopProjectCard from "./DesktopProjectCard";
import MobileProjectCard from "./MobileProjectCard";

export function ProjectPreview({ main_img, project_url, repo_url, name, description, images }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1000);
  const [visible, setVisible] = useState(false); 
  const [showProject, setShowProject] = useState(false); 
  const cardRef = useRef(null);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.8 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  // Delay para mostrar u ocultar Project
  useEffect(() => {
    let timeout;
    if (isDesktop) {
      if (visible) {
        timeout = setTimeout(() => setShowProject(true), 200); // delay al mostrar
      } else {
        timeout = setTimeout(() => setShowProject(false), 100); // delay al ocultar
      }
    }
    return () => clearTimeout(timeout);
  }, [visible, isDesktop]);

  return (
    <div className="card-container" ref={cardRef} style={{ position: "relative" }}>
      {isDesktop ? (
        showProject ? (
          <Project img_url={main_img} name={name} description={description} project_url={project_url} repo_url={repo_url} images={images}/>
        ) : (
          <DesktopProjectCard img_url={main_img} name={name} description={description} />
        )
      ) : (
        <MobileProjectCard img_url={main_img} name={name} description={description} project_url={project_url} repo_url={repo_url} />
      )}
    </div>
  );
}

export default ProjectPreview;
