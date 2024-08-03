import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./components/SideBar";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Task from "./components/Task";
import InProgress from "./components/InProgress";
import Complet from "./components/Complet";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeMenuTab, setActiveMenuTab] = useState(0);
  const [addTask, SetAddTask] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [complet, setComplet] = useState([]);
  const UserInfo = JSON.parse(localStorage.getItem("ProfileData"));
  const menu = [
    "Task",
    "Camera Access",
    "Mobile App",
    "Website Redesign",
    "Design System",
    "Wireframes",
    "Logout",
  ];

  // const count = useSelector((state) => state);

  const activeTab = (active) => {
    setActiveMenuTab(active);
  };
  const closeCreateTask = (value) => {
    SetAddTask(false);
  };
  const submitData = (title, text, priorty) => {
    setTaskData([
      ...taskData,
      { heading: title, content: text, priority: priorty },
    ]);
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

  useEffect(() => {
    // console.log(activeMenuTab);
    // console.log("UserInfo", UserInfo);
    if (activeMenuTab === 6) {
      localStorage.clear();
      navigate("/login");
    }
    if (activeMenuTab === 1) {
      navigate("/camera-access");
    }
  }, [activeMenuTab]);

  return (
    <>
      <div className="app-container w-full inline-flex">
        <div className="sidebar-container w-[20%]">
          <SideBar
            menu={menu}
            activeMenuTab={activeMenuTab}
            activeTab={activeTab}
          />
        </div>
        <div className="content-container w-[80%] border-2 relative h-screen">
          <div className=" w-full inline-flex justify-between px-8 py-4 border-b-2 border-[#DBDBDB]">
            <div className="w-[30%]">
              <input
                type="text"
                placeholder="Search for anything..."
                className=" px-2 py-1 bg-[#F5F5F5] w-full rounded-md "
              />
            </div>
            <div className="w-[40%] inline-flex justify-end space-x-3">
              <div className="">
                <p className=" text-sm font-bold">{UserInfo?.name}</p>
                <p className=" text-sm">{UserInfo?.email}</p>
              </div>
              {/* <div className="  w-10 h-10 bg-[#9d8e8e] rounded-full">
                <img src={UserInfo?.picture} className="logo"/>
              </div> */}
            </div>
          </div>
          <div className=" w-full inline-flex justify-end mt-10">
            <div
              className=" inline-flex bg-blue-700 rounded-md px-3 py-2"
              onClick={() => SetAddTask(true)}
            >
              <h5 className=" text-white font-bold cursor-pointer">
                + Add New Task
              </h5>
            </div>
          </div>
          <CreateNote
            open={addTask}
            closeCreateTask={closeCreateTask}
            submitData={submitData}
          />
          <div className=" w-full inline-flex justify-between mt-10">
            {/* task  */}
            <div className="w-[32%]">
              <Task
                taskData={taskData}
                updateData={updateData}
                addInProgress={addInProgress}
              />
            </div>
            {/* in progress  */}
            <div className="w-[32%]">
              <InProgress
                inProgress={inProgress}
                updateComplet={updateComplet}
              />
            </div>
            {/* done */}
            <div className="w-[32%]">
              <Complet complet={complet} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
