import { useState } from "react";
import NewTask from "./NewTask.jsx";

function AddTask() {
  const [showForm, setShowForm] = useState(false);
  function addTask() {
    //alert("you clicked");
    setShowForm(true);
  }
  if (showForm) {
    return (
      <div className="mb-24 md:mb-0">
        <AddTask />
        <NewTask />
      </div>
    );
  }
  return (
    <div className=" md:pb-12">
      <button
        className="absolute top-24 bg-[#01dabb] hover:bg-[#00bdc2] text-slate-500 mt-4 ml-32 p-2 rounded-lg md:text-xl md:top-28  md:left-[36%] lg:left-[38%]"
        onClick={addTask}
      >
        Add Task
      </button>
    </div>
  );
}
export default AddTask;
