import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "../../assets/styles/Answer.css";

const WriteAnswer = ({ subjectId, postId, handleViewMode }) => {
  const [text, setText] = useState("");

  const sendAnswer = () => {
    let result = false;
    if(text.trim() !== "") {
      const db = firebase.firestore();
      (async () => {
        await db.collection("subjects").doc(subjectId).collection("posts").doc(postId).update({
          "answers": firebase.firestore.FieldValue.arrayUnion({
            "answer": text,
            "thumbs": 0,
          })
        });
      })();
      result = true;
    }
    return result;
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleSendClick = () => {
    if(sendAnswer()) {
      alert("送信しました");
      handleViewMode(false);
    } else alert("回答を入力してください");
  }

  return (
    <div className="writeAnswer_wrapper">
      <textarea className="writeAnswer_input" type="text" rows="3" onChange={handleTextChange} value={text} />
      <div className="writeAnswer_bottom">
        <button className="writeAnswer_button writeAnswer_button-cancel" onClick={() => { handleViewMode(false) }}>キャンセル</button>
        <button className="writeAnswer_button writeAnswer_button-send" onClick={handleSendClick}>送信</button>
      </div>
    </div>
  )
}

export default WriteAnswer;