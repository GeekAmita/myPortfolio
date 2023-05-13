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

// interestList.map((item, index) => {
//   return (
//     <InterestBox
//       key={index}
//       icon={item.icon}
//       topic={item.topic}
//       detail={item.detail}
//       join={item.join}
//     />
//   );
// });

export default InterestBox;
