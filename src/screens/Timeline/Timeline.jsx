import { useState } from "react";
import { Card } from "./index";
import { Sidebar } from "../index";
import "../../assets/styles/Timeline.css";
import Button from "../../assets/images/hamButton.svg";

const Timeline = ({subjectNames, questionTitles, mainScreen, handleMainScreen}) => {
  // const data = ["コンパイルが通らない","関数の定義の方法がわからない","あああああああああああああ", "ああああああああああああああああああああああああああああああああああああああああああああああああ"];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarOpen = (bool) => {
    setIsSidebarOpen(bool);
  }

  // const titles = ["プログラミング(3)", "オブジェクト指向プログラミング", "パターン認識", "人工知能", "データベースシステム"];

  return (
    (mainScreen !== "Timeline") ? null :
    <>
      <Sidebar subjectNames={subjectNames} isSidebarOpen={isSidebarOpen} handleSidebarOpen={handleSidebarOpen} />
      <div className="timeline">
        <div className="timelineHeader">
          <p className="timelineHeader_title">{subjectNames[1]}</p>
          {/* idxで科目を識別する */}
          <button onClick={() => {handleSidebarOpen(true)}}>
            <img className="timelineHeader_button" src={Button} alt="menu" />
          </button>
        </div>
        <div className="timelineInner">
          <button className="timelineInner_button" onClick={() => { handleMainScreen("Post") }}>質問投稿</button>
          <div className="timelineCards">
            {questionTitles.map((card, idx) => (
              <Card key={idx} title={card} handleMainScreen={handleMainScreen} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline;