import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { Item } from "./index";
import "../../assets/styles/Post.css";

const Post = ({ subjectData, mainScreen, handleMainScreen}) => {
  const [titleText, setTitleText] = useState("");
  const [purposeText, setPurposeText] = useState("");
  const [unknownText, setUnknownText] = useState("");
  const [triedText, setTriedText] = useState("");

  const items = [
    { "name": "title", "text": "タイトル" },
    { "name": "purpose", "text": "目的" },
    { "name": "unknown", "text": "わからないこと" },
    { "name": "tried", "text": "試したこと" },
  ];
  
  const handleClick = () => {
    const db = firebase.firestore();
    (async () => {
      await db.collection("subjects").doc(subjectData.subjectId).collection("posts").add({
        "answers": [],
        "question": {
          "title": titleText,
          "purpose": purposeText,
          "unknown": unknownText,
          "tried": triedText,
        }
      }).then(() => {
        alert("投稿しました");
      });
    })();
    handleMainScreen("Timeline");
  }

  const handleChange = (name, text) => {
    switch(name) {
      case "title":
        setTitleText(text);
        break;
      case "purpose":
        setPurposeText(text);
        break;
      case "unknown":
        setUnknownText(text);
        break;
      case "tried":
        setTriedText(text);
        break;
      default:
        break;
    }
  }

  return (
    (mainScreen !== "Post") ? null :
    <div className="post">
      <div className="postContent_wrapper">
        <div className="postContent">
          {items.map((item,idx) => (
            <Item key={idx} name={item.name} text={item.text} handleChange={handleChange} />
          ))}
        </div>
      </div>
      <footer className="postFooter">
        <button className="postFooter_button postFooter_button-cancel" onClick={() => {handleMainScreen("Timeline")}}>キャンセル</button>
        <button className="postFooter_button postFooter_button-post" onClick={handleClick}>投稿</button>
      </footer>
    </div>
  )
}

export default Post;