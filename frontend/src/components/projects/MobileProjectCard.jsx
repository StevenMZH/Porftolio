import Social from "../Social";

export function MobileProjectCard({ img_url, name, description, repo_url, project_url }) {
  return (
    <div className="card">
      <a href={project_url} target="_blank" rel="noopener noreferrer">
        <img className="card-img" src={`projects/${img_url}`} alt={name} />
      </a>
      <div className="card-description">
        <div className="card-text">
          <p className="title text-title">{name}</p>
          <p className="sub-title">{description}</p>
        </div>
        <div className="repo">
          <Social img={"github.svg"} alt={"Github"} url={repo_url}/>
        </div>
      </div>
    </div>
  );
}

export default MobileProjectCard;
