import { useContext } from "react";
import { HandleContentDataContext } from "../../App";
import Icon from "../../assets/images/user.jpg";

const Card = ({ content, title, handleMainScreen }) => {
  const handleContentData = useContext(HandleContentDataContext);
  
  const handleClick = () => {
    handleContentData(content);
    handleMainScreen("Content");
  }

  return (
    <button className="timelineCard" onClick={handleClick}>
      <img className="timelineCard_icon" src={Icon} alt="user" />
      <p className="timelineCard_title">{title}</p>
    </button>
  )
} 

export default Card;