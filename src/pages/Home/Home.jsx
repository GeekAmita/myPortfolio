import { useState } from "react";
import "./Home.css";
import ProjectBox from "../../components/projects/ProjectBox";
import SkillBox from "../../components/skills/SkillBox";
import InterestBox from "../../components/interests/InterestBox";
import Contact from "../../components/contacts/Contacts";
import contactList from "../../data/ContactList";

function Home() {
  const MenuList = ["Projects", "Skills", "Interests"];

  const [activeIndex, setIsActive] = useState(0);

  const onMenuClick = (index) => {
    setIsActive(index);
  };

  return (
    <div className="home">
      <div className="headerBox">
        {MenuList.map((item, index) => {
          return (
            <div
              className={`headerItem ${activeIndex == index ? "isActive" : ""}`}
              key={index}
              onClick={() => onMenuClick(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="section1">
        <div className="intro">
          <h1 className="fontLarge">
            {`Hello, I'm`}
            <br />
            Amita Singh
          </h1>
          <h4 className="about fontSecondary">
            Welcome to my website! As a frontend web developer, {`I'm `}
            passionate about creating beautiful, user-friendly interfaces that
            enhance the user experience. Explore my projects and see how I bring
            ideas to life with code.
          </h4>
          <div className="content">
            {MenuList.map((item, index) => {
              return (
                <div
                  className={`contentItem ${
                    activeIndex == index ? "isActive" : ""
                  }`}
                  key={index}
                  onClick={() => onMenuClick(index)}
                >
                  <span>{index < 9 ? `0${index + 1}` : `${index + 1}`}</span>
                  <span
                    className={`line  ${
                      activeIndex == index ? "lineActive" : ""
                    }`}
                  ></span>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="info">
          {(() => {
            switch (activeIndex) {
              case 0:
                return <ProjectBox />;
              case 1:
                return (
                  <div className="container">
                    <SkillBox />
                  </div>
                );
              case 2:
                return <InterestBox />;
              default:
                return <ProjectBox />;
            }
          })()}
        </div>
      </div>
      <div className="section2">
        {contactList.map((item, index) => {
          return (
            <Contact
              key={index}
              image={item.image}
              handle={item.handle}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Home;
