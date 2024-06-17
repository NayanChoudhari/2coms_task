import React, { useState } from "react";
import SideBar from "./components/SideBar";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Task from "./components/Task";
import InProgress from "./components/InProgress";
import Complet from "./components/Complet";
const App = () => {
  const [activeMenuTab, setActiveMenuTab] = useState(0);
  const [addTask, SetAddTask] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [complet, setComplet] = useState([]);
  const menu = ["Task", "Mobile App", "Website Redesign", "Design System", "Wireframes"];
  const activeTab = (active) => {
    setActiveMenuTab(active);
  };
  const closeCreateTask = (value) => {
    SetAddTask(false);
  };
  const submitData = (title, text, priorty) => {
    setTaskData([...taskData, { heading: title, content: text, priority: priorty }]);
  };
  const updateData = (d) => {
    setTaskData([...d]);
  };
  const addInProgress = (index) => {
    console.log(index);
    setInProgress([...inProgress, taskData[index]]);
    taskData.splice(index, 1);
  };
  const updateComplet = (index) => {
    setComplet([...complet, inProgress[index]]);
    inProgress.splice(index, 1);
  };

  return (
    <div className="app-container w-full inline-flex">
      <div className="sidebar-container w-[20%]">
        <SideBar menu={menu} activeMenuTab={activeMenuTab} activeTab={activeTab} />
      </div>
      <div className="content-container w-[80%] border-2 relative h-screen">
        <div className=" w-full inline-flex justify-between px-8 py-4 border-b-2 border-[#DBDBDB]">
          <div className="w-[30%]">
            <input type="text" placeholder="Search for anything..." className=" px-2 py-1 bg-[#F5F5F5] w-full rounded-md " />
          </div>
          <div className="w-[40%] inline-flex justify-end space-x-3">
            <div className="">
              <p className=" text-sm font-bold">Amina Agrawal</p>
              <p className=" text-sm">UP India</p>
            </div>
            <div className="  w-10 h-10 bg-[#9d8e8e] rounded-full">{/* image */}</div>
          </div>
        </div>
        <div className=" w-full inline-flex justify-end mt-10">
          <div className=" inline-flex bg-blue-700 rounded-md px-3 py-2" onClick={() => SetAddTask(true)}>
            <h5 className=" text-white font-bold">+ Add New Task</h5>
          </div>
        </div>
        <CreateNote open={addTask} closeCreateTask={closeCreateTask} submitData={submitData} />
        <div className=" w-full inline-flex justify-between mt-10">
          {/* task  */}
          <div className="w-[32%]">
            <Task taskData={taskData} updateData={updateData} addInProgress={addInProgress} />
          </div>
          {/* in progress  */}
          <div className="w-[32%]">
            <InProgress inProgress={inProgress} updateComplet={updateComplet} />
          </div>
          {/* done */}
          <div className="w-[32%]">
            <Complet complet={complet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
