import { useState } from "react";
import { motion } from "framer-motion";
import Social from "../Social";
import ImageCarousel from "./imageCarousel";

export function Project({ img_url, project_url, repo_url, name, description, images }) {
  const [bounce, setBounce] = useState(false);

  // activa el bounce cada vez que cambia la imagen
  const handleImageChange = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 400); // resetea después de la animación
  };

  return (
    <motion.div
      className="project-container"
      key="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="project"
        animate={bounce ? { scale: [1, 1.04, 0.98, 1] } : {}}
        transition={{ duration: 0.4 }}
      >
        {images.length <= 1 ? (
          <img className="card-img" src={`projects/${img_url}`} alt={name} />
        ) : (
          <ImageCarousel images={images} onImageChange={handleImageChange} />
        )}

        <div className="card-description">
          <div className="card-text">
            <p className="title text-title">{name}</p>
            <p className="sub-title">{description}</p>
            <div className="project-links">
              <a href={repo_url} target="_blank" rel="noopener noreferrer">Repository</a>
              <a href={project_url} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Project;
