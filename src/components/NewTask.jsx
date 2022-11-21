import { useState } from "react";
import AddTask from "./Tasks.jsx";
import Button from "./Button.jsx";
let nextId = 0;
function NewTask() {
  const [tasks, setTask] = useState([]);
  const [formSubmit, setFormSubmit] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTitle("");
    setDetail("");
    setDate("");
    setTask([
      ...tasks,
      {
        id: nextId++,
        title: title,
        detail: detail,
        date: date,
      },
    ]);
    setFormSubmit(true);
  }
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleDetail(e) {
    setDetail(e.target.value);
  }
  function handleDate(e) {
    setDate(e.target.value);
  }
  if (formSubmit) {
    return (
      <div className="">
        {tasks.map((newTask) => {
          return (
            <div className="border border-black my-2 py-2" key={newTask.id}>
              <input type="checkbox" />
              <h1>{newTask.title}</h1>
              <p>{newTask.detail}</p>
              <p>{newTask.date}</p>
              <Button
                completeClicked={() => alert("completed")}
                deleteClicked={() =>
                  setTask(tasks.filter((t) => t.id !== newTask.id))
                }
              />
            </div>
          );
        })}
        <AddTask />
      </div>
    );
  }
  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <label for="title">Title</label>
      <input
        className="border border-black"
        onChange={handleTitle}
        type="text"
        name="title"
        placeholder="title"
        value={title}
        required
      />
      <br />
      <label for="detail">Description</label>
      <input
        className="border border-black"
        onChange={handleDetail}
        type="text"
        name="detail"
        placeholder="Description"
        value={detail}
        required
      />
      <br />
      <label for="date">To be Completed on</label>
      <input
        className=""
        onChange={handleDate}
        type="date"
        name="name"
        min="2022-11-14"
        max="2023-12-31"
        value={date}
        required
      />
      <button className="bg-black p-2 rounded text-white" type="submit">
        submit
      </button>
    </form>
  );
}
export default NewTask;
