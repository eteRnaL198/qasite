import { useState } from "react";
import firebase from "firebase/app";
import firestore from "firebase/firestore";
import "../../assets/styles/Answer.css";

const WriteAnswer = ({ subjectId, postId, handleViewMode }) => {
  const [text, setText] = useState("");

  const sendAnswer = () => {
    if(text.trim() !== "") {
      const db = firebase.firestore();
      (async () => {
        await db.collection("subjects").doc(subjectId).collection("posts").doc(postId).update({
          "answers": firebase.firestore.FieldValue.arrayUnion({
            "answer": text,
            "thumbs": 0,
          })
        });
        alert("送信しました");
      })();
    }
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleSendClick = () => {
    sendAnswer();
    handleViewMode(false);
  }

  return (
    <div className="answer_wrapper">
      <textarea className="answer_input" type="text" rows="3" onChange={handleTextChange} value={text} />
      <div className="answer_bottom">
        <button className="answer_button answer_button-cancel" onClick={() => { handleViewMode(false) }}>キャンセル</button>
        <button className="answer_button answer_button-send" onClick={handleSendClick}>送信</button>
      </div>
    </div>
  )
}

export default WriteAnswer;