import firebase from "firebase/app";
import "firebase/firestore";
import { useState, useEffect, createContext } from "react";
import './assets/styles/App.css';
import { Timeline, Post, Content } from './screens/index';
import writeData from "./data";

export const AllDataContext = createContext();
export const HandleSubjectDataContext = createContext();
export const HandleContentDataContext = createContext();

function App() {
  const [mainScreen, setMainScreen] = useState("Timeline");
  const [allData, setAllData] = useState([]);
  const [subjectData, setSubjectData] = useState({"subjects": "","posts": []});
  const [subjectIdx, setSubjectIdx] = useState(0);
  const [contentData, setContentData] = useState({});
  
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
    (async () => {
      await db.collection("data").doc("eGTIlnmcicg0pXUMJMkN").get().then((doc) => {
        const data = doc.data();
        setAllData(data.data);
        setSubjectData(data.data[0]);
      });
    })();
    writeData();
  }, []);

  const handleMainScreen = (screen) => {
    setMainScreen(screen);
  }

  const handleSubjectData = (data) => {
    setSubjectData(data);
  }

  const handleSubjectIdx = (idx) => {
    setSubjectIdx(idx);
  }

  const handleContentData = (data) => {
    setContentData(data);
  }

  return (
    <div className="App">
      <AllDataContext.Provider value={allData}>
        <HandleSubjectDataContext.Provider value={handleSubjectData}>
          <HandleContentDataContext.Provider value={handleContentData}>
            <Timeline subjectData={subjectData} mainScreen={mainScreen} handleMainScreen={handleMainScreen} />
          </HandleContentDataContext.Provider>
        </HandleSubjectDataContext.Provider>
      </AllDataContext.Provider>
      <Post mainScreen={mainScreen} handleMainScreen={handleMainScreen} />
      <Content contentData={contentData} mainScreen={mainScreen} handleMainScreen={handleMainScreen} />
    </div>
  );
}

export default App;
