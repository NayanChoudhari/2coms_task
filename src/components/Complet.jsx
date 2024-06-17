const Complet = (props) => {
  const data = props.complet;
  return (
    <>
      {data.length > 0 && (
        <div className="bg-[#F5F5F5] p-2 rounded-md">
          <h3 className="text-center font-bold inline-flex  items-center ">
            Done <span className="  text-sm bg-[#625F6D] w-5 rounded-full text-white block ml-2">{data.length}</span>
          </h3>
          <div className="mt-2">
            {data.map((task, index) => (
              <div key={index} className="task-item bg-white p-2  mb-2 rounded-md">
                <div className=" w-full inline-flex justify-between">
                  <p className=" ring-1 bg-green-100 ring-green-400 text-green-700  px-2 rounded-sm inline-flex  text-xs">complet</p>
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
export default Complet;
