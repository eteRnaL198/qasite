import { useState } from "react";
import { ViewAnswer, WriteAnswer } from "../Answer/index";
import "../../assets/styles/Content.css";
import Back from "../../assets/images/back.svg";

const Content = ({ contentData, mainScreen, handleMainScreen }) => {
  const [isViewMode, setIsViewMode] = useState(true);
  const items = {
    "title": "",
    "purpose": "目的",
    "unknown": "わからないこと",
    "tried": "試したこと"
  }

  const handleViewMode = () => {
    setIsViewMode(!isViewMode);
  }

  return (
    (mainScreen !== "Content") ? null :
    <div className="content">
      <div className="content_inner">
        {(!isViewMode) ? null :
          <button onClick={() => { handleMainScreen("Timeline") }}>
            <img className="content_back" src={Back} alt="back" />
          </button>
        }
        {Object.keys(items).map((key, idx) => (
          <div key={idx} className="contentItem">
            <p className="contentItem_title">{items[key]}</p>
            <p className="contentItem_text">{contentData.question[key]}</p>
          </div>
        ))}
      </div>
      {(isViewMode) ? 
        <ViewAnswer answerData={contentData.answers} handleViewMode={handleViewMode} />
        :
        <WriteAnswer subjectId={contentData.subjectId} postId={contentData.postId} handleViewMode={handleViewMode} />
      }
    </div>
  )
}

export default Content;