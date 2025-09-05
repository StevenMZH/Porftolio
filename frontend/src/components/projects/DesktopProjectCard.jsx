import { motion } from "framer-motion";

export function DesktopProjectCard({ img_url, name, description }) {
  return (
    <motion.div key="desktop-card-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <div className="card">
        <img className="card-img" src={`projects/${img_url}`} alt={name} />
        <div className="card-description">
          <div className="card-text">
            <p className="title text-title">{name}</p>
            <p className="sub-title">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DesktopProjectCard;
