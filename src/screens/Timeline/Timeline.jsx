import { useState } from "react";
import { Card } from "./index";
import { Sidebar } from "../index";
import "../../assets/styles/Timeline.css";
import Button from "../../assets/images/hamButton.svg";

const Timeline = ({mainScreen, handleMainScreen, title}) => {
  const data = ["コンパイルが通らない","関数の定義の方法がわからない","あああああああああああああ", "ああああああああああああああああああああああああああああああああああああああああああああああああ"];
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
          <p className="timelineHeader_title">{title}</p>
          <button onClick={() => {handleSidebarOpen(true)}}>
            <img className="timelineHeader_button" src={Button} alt="menu" />
          </button>
        </div>
        <div className="timelineInner">
          <button className="timelineInner_button" onClick={() => { handleMainScreen("Post") }}>質問投稿</button>
          <div className="timelineCards">
            {data.map((card, idx) => (
              <Card key={idx} title={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline;