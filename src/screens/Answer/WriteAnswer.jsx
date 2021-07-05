import { useState } from "react";
import firebase from "firebase/app";
import firestore from "firebase/firestore";
import "../../assets/styles/Answer.css";

const WriteAnswer = ({handleViewMode}) => {
  const [text, setText] = useState("");

  const sendAnswer = () => {
    const db = firebase.firestore();
    (async () => {
      const ref = db.collection("data").doc("eGTIlnmcicg0pXUMJMkN");
      await ref.child().update({
        "answers": firebase.firestore.FieldValue.arrayUnion("hello"),
      })
    })();
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleSendClick = () => {
    sendAnswer();
    handleViewMode(false);
  }

  return (
    <>
      <input type="text" onChange={handleTextChange} value={text} />
      <button onClick={() => { handleViewMode(false) }}>キャンセル</button>
      <button onClick={handleSendClick}>送信</button>
    </>
  )
}

export default WriteAnswer;