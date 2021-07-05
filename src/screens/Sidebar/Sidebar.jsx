import { useContext } from "react";
import { AllDataContext } from "../../App";
import { Card } from "./index";
import "../../assets/styles/Sidebar.css";
import Cross from "../../assets/images/cross.svg";

const Sidebar = ({isSidebarOpen, handleSidebarOpen}) => {
  const allData = useContext(AllDataContext);

  return (
    <div className={`sidebar ${(isSidebarOpen) ? "sidebar-on" : ""}`}>
      <div className="sidebarTop">
        <p className="sidebarTop_title">科目一覧</p>
        <button onClick={() => {handleSidebarOpen(false)}}>
          <img className="sidebarTop_button" src={Cross} alt="close" />
        </button>
      </div>
      <div className="sidebarInner">
        {allData.map((data, idx) => (
          <Card allData={allData} title={data.subject} key={idx} handleSidebarOpen={handleSidebarOpen} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar;