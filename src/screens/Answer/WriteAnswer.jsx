import { useState } from "react";
import firebase from "firebase/app";
import firestore from "firebase/firestore";
import "../../assets/styles/Answer.css";

const WriteAnswer = ({handleViewMode, posts}) => {
  const [text, setText] = useState("");

  const sendAnswer = () => {
    const db = firebase.firestore();
    (async () => {
      let docId;
      await db.collection("subjects").where("name", "==", "ハードウェア記述言語").get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          docId = doc.id;
      })});
      const postId = "JLw6ydIrYB9TPxKlTQXb";
      await db.collection("subjects").doc(docId).collection("posts").doc(postId).update({
        "answers": firebase.firestore.FieldValue.arrayUnion({
          "answer": text,
          "thumbs": 0,
        })
      });
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