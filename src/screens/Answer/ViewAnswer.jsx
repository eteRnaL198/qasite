import { AnswerCard } from "./index";
import Icon from "../../assets/images/user.jpg";
import "../../assets/styles/Answer.css";

const ViewAnswer = ({ answerData, handleViewMode}) => {
  return (
    <>
      {answerData.map((ans, idx) => (
        <AnswerCard key={idx} answer={ans.answer} thumbsNum={ans.thumbs} />
      ))}
      <img className="answer_userIcon" src={Icon} alt="User" />
      <button onClick={() => { handleViewMode() }}>回答</button>
    </>
  )
}

export default ViewAnswer;