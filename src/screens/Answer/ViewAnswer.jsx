import { AnswerCard } from "./index";

const ViewAnswer = ({ subjectId, postId, answerData, handleViewMode}) => {
  return (
    <div className="viewAnswer">
      <div className="viewAnswer_inner">
        {answerData.map((ans, idx) => (
          <AnswerCard subjectId={subjectId} postId={postId} answers={answerData} idx={idx} key={idx} />
        ))}
      </div>
      <button className="viewAnswer_button" onClick={handleViewMode}>回答</button>
    </div>
  )
}

export default ViewAnswer;