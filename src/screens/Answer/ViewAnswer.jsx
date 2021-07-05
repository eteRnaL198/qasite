import Icon from "../../assets/images/user.jpg";
import "../../assets/styles/Answer.css";

const ViewAnswer = ({ answerData, handleViewMode}) => {
  return (
    <>
      {answerData.map((ans, idx) => (
        <div key={idx}>
          <p>{ans.answer}</p>
          <button>thumbs-up</button>
          <p>{ans.thumbs}</p>
        </div>
      ))}
      <img className="answer_userIcon" src={Icon} alt="User" />
      <button onClick={() => { handleViewMode() }}>回答</button>
    </>
  )
}

export default ViewAnswer;