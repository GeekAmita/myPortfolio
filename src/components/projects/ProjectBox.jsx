import "./ProjectBox.css";
import projectList from "../../data/ProjectList";

function ProjectBox() {
  return (
    <div className="listContainer">
      {projectList.map((item, index) => {
        return (
          <div>
            {" "}
            <a
              className="dialog"
              href={item.visit}
              target="_blank"
              rel="noreferrer"
            >
              <div className="header">
                <div className="stack">{item.stack}</div>
                <img
                  className="linkImg"
                  src="./External_Link_light.png"
                  alt="Link"
                />
              </div>
              <div className="name">{item.name}</div>
              <div className="dis">{item.dis}</div>
              <div className="tech">
                {item.tech.map((item, index) => {
                  return (
                    <div className="techItem" key={index}>
                      {item}
                    </div>
                  );
                })}
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectBox;
