import "./SkillBox.css";
import skillList from "../../data/SkillList";

function SkillBox() {
  return skillList.map((item, index) => {
    return (
      <div className="cell" style={{ gridArea: `box${index}` }}>
        <div className="category">{item.category}</div>
        <div className="skills">
          {item.skills.map((item, index) => {
            return (
              <div className="skillItem" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  });
}

export default SkillBox;
