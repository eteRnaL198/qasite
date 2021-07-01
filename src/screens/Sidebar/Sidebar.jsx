import { Card } from "./index";
import "../../assets/styles/Sidebar.css";
import Cross from "../../assets/images/cross.svg";

const Sidebar = ({isSidebarOpen, handleSidebarOpen}) => {
  const data = ["プログラミング(3)", "オブジェクト指向プログラミング", "パターン認識", "人工知能", "データベースシステム"];
  return (
    <div className={`sidebar ${(isSidebarOpen) ? "sidebar-on" : ""}`}>
      <div className="sidebarTop">
        <p className="sidebarTop_title">科目一覧</p>
        <button onClick={() => {handleSidebarOpen(false)}}>
          <img className="sidebarTop_button" src={Cross} alt="close" />
        </button>
      </div>
      <div className="sidebarInner">
        {data.map((title, idx) => (
          <Card title={title} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar;