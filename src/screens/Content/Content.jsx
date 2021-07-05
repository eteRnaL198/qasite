import { useState } from "react";
import { ViewAnswer, WriteAnswer } from "../Answer/index";
import "../../assets/styles/Content.css";
import Back from "../../assets/images/back.svg";

const Content = ({ contentData, mainScreen, handleMainScreen }) => {
  const [isViewMode, setIsViewMode] = useState(true);
  const items = {
    "title": "タイトル",
    "purpose": "目的",
    "unknown": "わからないこと",
    "tried": "試したこと"
  }

  const handleViewMode = () => {
    setIsViewMode(!isViewMode);
  }

  return (
    (mainScreen !== "Content") ? null :
    <>
      {(!isViewMode) ? null :
        <button onClick={() => { handleMainScreen("Timeline") }}>
          <img className="content_back" src={Back} alt="back" />
        </button>
      }
      {Object.keys(items).map((key, idx) => (
        <div key={idx} className="contentItem">
          <p>{items[key]} : </p>
          <p>{contentData.question[key]}</p>
        </div>
      ))}
      {(isViewMode) ? 
        <ViewAnswer answerData={contentData.answers} handleViewMode={handleViewMode} />
        :
        <WriteAnswer handleViewMode={handleViewMode} />
      }
    </>
  )
}

export default Content;