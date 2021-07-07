import firebase from "firebase/app";
import "firebase/firestore";
import { useState, useEffect } from "react";
import { Card } from "./index";
import { Sidebar } from "../index";
import "../../assets/styles/Timeline.css";
import Button from "../../assets/images/hamButton.svg";

const Timeline = ({subjectData, mainScreen, handleMainScreen}) => {
  const [postsData, setPostsData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarOpen = (bool) => {
    setIsSidebarOpen(bool);
  }

  useEffect(() => {
    (async () => {
      const db = firebase.firestore();
      const tempPostsData = [];
      await db.collection("subjects").doc(subjectData.subjectId).collection("posts").get().then(snapshot => {
        snapshot.docs.forEach((doc, idx) => {
          tempPostsData.push({
            "answers": doc.data().answers,
            "question": doc.data().question,
            "postId": subjectData.postIds[idx],
            "subjectId": subjectData.subjectId,
          })
        })
      })
      setPostsData(tempPostsData);
    })();
  }, [subjectData.postIds, subjectData.subjectId]);

  return (
    (mainScreen !== "Timeline" || typeof subjectData === "undefined") ? null :
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebarOpen={handleSidebarOpen} />
      <div className="timeline">
        <div className="timelineHeader">
          <p className="timelineHeader_title">{subjectData.name}</p>
          <button onClick={() => {handleSidebarOpen(true)}}>
            <img className="timelineHeader_button" src={Button} alt="menu" />
          </button>
        </div>
        <div className="timelineInner">
          <button className="timelineInner_button" onClick={() => { handleMainScreen("Post") }}>質問投稿</button>
          <div className="timelineCards">
            {postsData.map((postData, idx) => (
              <Card post={postData} key={idx} title={postData.question.title} handleMainScreen={handleMainScreen} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline;