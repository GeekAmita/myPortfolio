import "./InterestBox.css";
import interestList from "../../data/InterestList";

function InterestBox() {
  return interestList.map((item, index) => {
    return (
      <div>
        <div className="case">
          <div className="iconBox">
            <img className="icon" src={item.icon} alt={item.topic} />
          </div>
          <a
            className="detailBox"
            href={item.join}
            target="_blank"
            rel="noreferrer"
          >
            <div className="topic">{item.topic}</div>
            <div className="detail">{item.detail}</div>
          </a>
        </div>
      </div>
    );
  });
}

export default InterestBox;
