import React, { useEffect, useState } from "react";

const Task = (props) => {
  const data = props.taskData;
  const onclickprogress = props.addInProgress;
  //   const [tasks, setTasks] = useState([...data]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks([...data]);
  }, [data]);
  const onDragStart = (event, index) => {
    event.dataTransfer.setData("taskIndex", index);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, dropIndex) => {
    const dragIndex = event.dataTransfer.getData("taskIndex");
    const draggedTask = tasks[dragIndex];

    const updatedTasks = [...tasks];
    updatedTasks.splice(dragIndex, 1);
    updatedTasks.splice(dropIndex, 0, draggedTask);

    setTasks(updatedTasks);
    props.updateData(updatedTasks);
  };
  return (
    <div className="bg-[#F5F5F5] p-2 rounded-md">
      <h3 className="text-center font-bold inline-flex  items-center ">
        All Task <span className=" text-sm bg-[#625F6D] w-5 rounded-full text-white block ml-2">{tasks.length}</span>
      </h3>
      <div className="mt-2">
        {tasks.map((task, index) => (
          <div key={index} draggable onDragStart={(event) => onDragStart(event, index)} onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event, index)} className="task-item bg-white p-2  mb-2 rounded-md cardbox">
            <div className=" w-full inline-flex justify-between h-5">
              <p className={` ${task.priority === "Low" ? "ring-1 bg-orange-100 ring-orange-400 text-orange-800" : ""} ${task.priority === "High" ? "ring-1  bg-red-100 ring-red-400 text-red-800" : ""} ${task.priority === "Medium" ? "ring-1 ring-yellow-400 bg-yellow-100 text-yellow-800" : ""} px-2 rounded-sm inline-flex  text-xs`}>{task.priority}</p>
              <p
                onClick={() => {
                  onclickprogress(index);
                  tasks.splice(index, 1);
                }}
                className=" text-sm cursor-pointer italic">
                Add in Progress
              </p>
            </div>
            <h3 className=" text-lg font-bold">{task.heading}</h3>
            <p>{task.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
