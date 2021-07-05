import { useState } from "react";
import { Card } from "./index";
import { Sidebar } from "../index";
import "../../assets/styles/Timeline.css";
import Button from "../../assets/images/hamButton.svg";

const Timeline = ({subjectData, mainScreen, handleMainScreen}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarOpen = (bool) => {
    setIsSidebarOpen(bool);
  }

  return (
    (mainScreen !== "Timeline") ? null :
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebarOpen={handleSidebarOpen} />
      <div className="timeline">
        <div className="timelineHeader">
          <p className="timelineHeader_title">{subjectData.name}</p>
          <button onClick={() => {handleSidebarOpen(true)}}>
            <img className="timelineHeader_button" src={Button} alt="menu" />
          </button>
        </div>
        <div className="timelineInner">
          <button className="timelineInner_button" onClick={() => { handleMainScreen("Post") }}>質問投稿</button>
          <div className="timelineCards">
            {subjectData.posts.map((post, idx) => (
              <Card content={post} key={idx} title={post.question.title} handleMainScreen={handleMainScreen} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline;