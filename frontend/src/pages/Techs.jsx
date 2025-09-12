import { Tech } from "../components/Tech";
import Reveal from "../components/Reveal";

export function Techs() {
  return (
    <div className="section techs">
      <p className="title text-hl">Technologies</p>
      <div className="stacks">
        <Reveal>
          <div className="stack">
            <Tech img={"frontend/html5.svg"} alt={"HTML"} />
            <Tech img={"frontend/css.svg"} alt={"CCS"} />
            <Tech img={"frontend/javascript.svg"} alt={"JS"} />
            <Tech img={"frontend/react.svg"} alt={"React"} />
            <Tech img={"frontend/react_router.svg"} alt={"React Router"} />
            <Tech img={"frontend/flutter.svg"} alt={"Flutter"} />
          </div>
        </Reveal>

        <Reveal>
          <div className="stack">
            <Tech img={"backend/python.svg"} alt={"Python"} />
            <Tech img={"backend/django.svg"} alt={"Django REST"} />
            <Tech img={"backend/gunicorn.svg"} alt={"Gunicorn"} />
            <Tech img={"backend/jwt.svg"} alt={"JWT"} />
            <Tech img={"backend/oauth.svg"} alt={"OAuth2"} />
          </div>
        </Reveal>

        <Reveal>
          <div className="stack">
            <Tech img={"devops/git.svg"} alt={"Git"} />
            <Tech img={"devops/github.svg"} alt={"Github"} />
            <Tech img={"devops/docker.svg"} alt={"Docker"} />
            <Tech img={"devops/nginx.svg"} alt={"Nginx"} />
            <Tech img={"devops/google_cloud.svg"} alt={"Google Cloud Platform"} />
            <Tech img={"devops/github_actions.svg"} alt={"Github Actions"} />
          </div>
        </Reveal>

        <Reveal>
          <div className="stack">
            <Tech img={"databases/postgresql.svg"} alt={"PostgreSQL"} />
            <Tech img={"databases/mongodb.svg"} alt={"MongoDB"} />
          </div>
        </Reveal>

        <Reveal>
          <div className="stack">
            <Tech img={"others/arduino.svg"} alt={"Arduino"} />
            <Tech img={"others/cisco.svg"} alt={"Cisco"} />
            <Tech img={"others/latex.svg"} alt={"Latex"} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Techs;
