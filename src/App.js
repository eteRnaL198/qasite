import { useState, useEffect } from "react";
import './assets/styles/App.css';
import { Timeline, Post } from './screens/index';

function App() {
  const [mainScreen, setMainScreen] = useState("Timeline");
  const [subjectName, setSubjectName] = useState();

  useEffect(() => {
    // firebase データ取得
  }, []);

  const handleMainScreen = (screen) => {
    setMainScreen(screen);
  }
  const handleSubjectName = (name) => {
    setSubjectName(name);
  }

  return (
    <div className="App">
      <Timeline mainScreen={mainScreen} handleMainScreen={handleMainScreen} title={subjectName} />
      <Post mainScreen={mainScreen} handleMainScreen={handleMainScreen} />
    </div>
  );
}

export default App;
