import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";

const CreateNote = (props) => {
  const [textValue, setTextValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [priority, setPriority] = useState("Low");
  const open = props.open;
  const closeCreateTask = props.closeCreateTask;
  const submitData = props.submitData;

  const inputEvent = (e) => {
    setTextValue(e.target.value);
  };
  const inputEventTitle = (e) => {
    setTitleValue(e.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  const clear = () => {
    setTextValue("");
    setPriority("Medium");
    setTitleValue("");
    setTimeout(() => {
      closeCreateTask(false);
    }, 1000);
  };
  return (
    <>
      {open && (
        <div className=" absolute top-0 left-0 w-full h-full bg-dark-withOpacity backdrop-blur-sm inline-flex items-center justify-center z-[2060] overflow-hidden transition-all">
          <div className="relative w-[70%] border px-3 py-8">
            <div className=" absolute left-[90%] -top-14 p-4 cursor-pointer  w-10 bg-[#E0E0E0] h-10  inline-flex justify-center items-center font-bold rounded-full" onClick={() => closeCreateTask(false)}>
              x
            </div>
            <h2 className=" text-center font-bold">Add New Task</h2>
            <div className="">
              <label htmlFor="title ">Title of task</label>
              <input type="text" value={titleValue} onChange={inputEventTitle} name="" id="" className=" border-2 border-black w-full rounded-md px-2 py-2" placeholder="add you task" />
            </div>
            <br />
            <label htmlFor="">Task Description</label>
            <input type="text" value={textValue} onChange={inputEvent} name="" id="" className=" border-2 border-black w-full rounded-md px-2 py-2" placeholder="add you task" />
            <div className=" inline-flex flex-col mt-3">
              <h2>Task Priority</h2>
              <div className=" inline-flex space-x-2">
                <input type="radio" name="priority" value="High" checked={priority === "High"} onChange={handlePriorityChange} id="html" />
                <label htmlFor="html">High</label>
              </div>
              <div className="inline-flex space-x-2">
                <input type="radio" name="priority" value="Medium" checked={priority === "Medium"} onChange={handlePriorityChange} id="medium" />
                <label htmlFor="medium">Medium</label>
              </div>
              <div className="inline-flex space-x-2">
                <input type="radio" name="priority" value="Low" checked={priority === "Low"} onChange={handlePriorityChange} id="low" />
                <label htmlFor="low">Low</label>
              </div>
            </div>
            <div className=" w-full inline-flex justify-center">
              <button
                className=" px-10 py-1 rounded-lg bg-blue-700 text-white font-bold"
                onClick={() => {
                  submitData(titleValue, textValue, priority);
                  clear();
                }}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CreateNote;
