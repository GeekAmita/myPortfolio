import "./ProjectBox.css";
import projectList from "../../data/ProjectList";

function ProjectBox() {
  return projectList.map((item, index) => {
    return (
      <div>
        {" "}
        <a
          className="dialog"
          href={item.visit}
          target="_blank"
          rel="noreferrer"
        >
          <div className="stack">{item.stack}</div>
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
  });
}

export default ProjectBox;
