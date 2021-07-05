import { useContext } from "react";
import { HandleSubjectDataContext } from "../../App";

const Card = ({allData, title, handleSidebarOpen}) => {
  const handleSubjectData = useContext(HandleSubjectDataContext);

  const handleClick = () => {
    handleSubjectData(() => allData.find(subjectData => subjectData.name === title));
    handleSidebarOpen(false);
  }

  return (
    <button className="sidebarInner_button" onClick={handleClick}>{title}</button>
  )
}

export default Card;