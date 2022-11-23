import { useState } from "react";
import NewTask from "./NewTask.jsx";

function AddTask() {
  const [showForm, setShowForm] = useState(false);
  function addTask() {
    //alert("you clicked");
    setShowForm(true);
  }
  if (showForm) {
    return <NewTask />;
  }
  return (
    <div className="">
      <button
        className="bg-[#01dabb] hover:bg-[#00bdc2] text-slate-500 mt-4 ml-32 p-2 rounded-lg"
        onClick={addTask}
      >
        Add Task
      </button>
    </div>
  );
}
export default AddTask;
