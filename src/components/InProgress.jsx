const InProgress = (props) => {
  const data = props.inProgress;
  const updateComplet = props.updateComplet;
  return (
    <>
      {data.length > 0 && (
        <div className="bg-[#F5F5F5] p-2 rounded-md">
          <h3 className="text-center font-bold inline-flex  items-center ">
            On Progress <span className=" text-sm bg-[#625F6D] w-5 rounded-full text-white block ml-2">{data.length}</span>
          </h3>
          <div className="mt-2">
            {data.map((task, index) => (
              <div key={index} className="task-item bg-white p-2  mb-2 rounded-md">
                <div className=" w-full inline-flex justify-between h-5">
                  <p className={` ${task.priority === "Low" ? "ring-1 bg-orange-100 ring-orange-400 text-orange-800" : ""} ${task.priority === "High" ? "ring-1  bg-red-100 ring-red-400 text-red-800" : ""} ${task.priority === "Medium" ? "ring-1 ring-yellow-400 bg-yellow-100 text-yellow-800" : ""} px-2 rounded-sm inline-flex  text-xs`}>{task.priority}</p>
                  <p onClick={() => updateComplet(index)} className=" italic">
                    add to complete
                  </p>
                </div>
                <h3 className=" text-lg font-bold">{task.heading}</h3>
                <p>{task.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default InProgress;
