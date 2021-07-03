import { useState } from "react";
import { Answer } from "../Answer/index";
import "../../assets/styles/Content.css";
import Back from "../../assets/images/back.svg";

const Content = ({ mainScreen, handleMainScreen }) => {
  const [isViewMode, setIsViewMode] = useState(true);
  const items = ["タイトル", "目的", "わからないこと", "試したこと"];

  const handleViewMode = () => {
    setIsViewMode(!isViewMode);
  }

  return (
    (mainScreen !== "Content") ? null :
    <>
      {(!isViewMode) ? null :
        <button onClick={() => { handleMainScreen("Timeline") }}>
          <img className="Content_back" src={Back} alt="back" />
        </button>
      }
      {items.map((item, idx) => (
        <div key={idx}>
          <p>{item}</p>
          <p>あああああ</p>
        </div>
      ))}
      <Answer isViewMode={isViewMode} handleViewMode={handleViewMode} />
    </>
  )
}

export default Content;