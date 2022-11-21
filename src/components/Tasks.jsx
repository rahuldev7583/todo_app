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
        className="bg-black text-white my-4 mx-4 p-2 rounded"
        onClick={addTask}
      >
        Add Task
      </button>
    </div>
  );
}
export default AddTask;
