import firebase from "firebase/app";
import "firebase/firestore";
import { useState } from "react";
import Thumb from "../../assets/images/thumb.svg";
import Icon from "../../assets/images/user.jpg";

const AnswerCard = ({ subjectId, postId, answers, idx }) => {
  const [thumbs, setThumbs] = useState(answers[idx].thumbs);

  const handleClick = () => {
    setThumbs(thumbs+1);
    const db = firebase.firestore();
    (async () => {
      const newAnswers = answers.map((ans, i) => (
        (i === idx) ? { "answer": answers[idx].answer, "thumbs": thumbs+1 } : ans
      ))
      await db.collection("subjects").doc(subjectId).collection("posts").doc(postId).update({
        "answers": newAnswers
      })
    })();
  }

  return (
    <div className="answerCard">
      <p className="answerCard_text">{answers[idx].answer}</p>
      <div className="answerCard_inner">
        <div className="answerCard_thumbWrapper">
          <img className="answerCard_thumb" src={Thumb} alt="thumb" onClick={handleClick} />
          <p className="answerCard_thumbNum">{thumbs}</p>
        </div>
        <img className="answerCard_userIcon" src={Icon} alt="User" />
      </div>
    </div>
  )
}

export default AnswerCard;