import Icon from "../../assets/images/user.jpg";
import "../../assets/styles/Answer.css";

const Answer = ({isViewMode, handleViewMode}) => {
  return (
    (isViewMode) ?
    <>
      <p>あいうえお</p>
      <p>thumbs: 10</p>
      <img className="answer_userIcon" src={Icon} alt="User" />
      <button onClick={() => { handleViewMode() }}>回答</button>
    </>
     :
    <>
      <p>I'm answering</p>
      <button onClick={() => { handleViewMode() }}>キャンセル</button>
      <button onClick={() => { handleViewMode() }}>送信</button>
    </>
  )
}

export default Answer;