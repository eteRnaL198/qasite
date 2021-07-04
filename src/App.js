import firebase from "firebase/app";
import "firebase/firestore";
import { useState, useEffect } from "react";
import './assets/styles/App.css';
import { Timeline, Post, Content } from './screens/index';
import writeData from "./data";

function App() {
  const [mainScreen, setMainScreen] = useState("Content");
  const [data, setData] = useState();
  const [subjectNames, setSubjectNames] = useState("オブジェクト指向プログラミング");
  const [titles, setTitles] = useState();
  const [contentData, setContentData] = useState();
  
  useEffect(() => {
    if(!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBWD4vpkUljlKnKKTdn01OmCGRuojScPpw",
        authDomain: "qasite-b29ad.firebaseapp.com",
        projectId: "qasite-b29ad",
        storageBucket: "qasite-b29ad.appspot.com",
        messagingSenderId: "386920795770",
        appId: "1:386920795770:web:a6c8e035bf3b3251a4b5c3",
        measurementId: "G-PMLLL2PYWY"
      });
    }
    const db = firebase.firestore();
    db.collection("data").doc("eGTIlnmcicg0pXUMJMkN").get().then((doc) => {
      const data = doc.data();
      setData(data.data);
      setSubjectNames(data.data.map(elem => (elem.subject)));
      setContentData(data.data[0].posts);
      setTitles(data.data[0].posts.map(elem => (elem.question.title)));
      console.log(data.data[0].posts);
    })
    // writeData();

    // setContentData(一番上の要素のposts);
  }, []);

  const handleMainScreen = (screen) => {
    setMainScreen(screen);
  }
  const handleSubjectName = (name) => {
    setSubjectNames(name);
  }

  return (
    <div className="App">
      <Timeline subjectNames={subjectNames} questionTitles={titles} mainScreen={mainScreen} handleMainScreen={handleMainScreen} />
      <Post mainScreen={mainScreen} handleMainScreen={handleMainScreen} />
      <Content contentData={contentData} mainScreen={mainScreen} handleMainScreen={handleMainScreen} />
    </div>
  );
}

export default App;
