import { useState } from "react";
import Button from "./Button.jsx";
let nextId = 0;
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function NewTask() {
  const [tasks, setTask] = useState([]);
  const [formSubmit, setFormSubmit] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [day, setDay] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setTitle("");
    setDetail("");
    setDay(null);
    setTask([
      ...tasks,
      {
        id: nextId++,
        title: title,
        detail: detail,
        day: day,
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
  function handleDay(e) {
    setDay(e.target.value);
  }
  if (formSubmit) {
    return (
      <div className="z-0 mt-16 ">
        {tasks.map((newTask) => {
          return (
            <div
              className="border-2 border-[#01dabb] rounded-xl h-42 w-[70%] mt-2 text-slate-800 ml-16 pl-12 md:w-[30%] md:text-xl md:mt-8 md:ml-[35%] md:pl-16"
              key={newTask.id}
            >
              <input
                onChange={() => {
                  alert("Task Completed");
                }}
                type="checkbox"
                className="accent-[#01dabb] ml-[-25px] mt-4 md:w-6 md:h-6 md:ml-[-40px]"
              />
              <h1 className=" text-xl font-medium mt-[-26px] md:text-4xl">
                {newTask.title}
              </h1>
              <p className="">{newTask.detail}</p>
              <p className="">
                {month[newTask.day.slice(5, 7) - 1] +
                  " " +
                  newTask.day.slice(8, 10)}
              </p>
              <Button
                deleteClicked={() =>
                  setTask(tasks.filter((t) => t.id !== newTask.id))
                }
              />
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <form
      className="absolute pt-1 pb-32 top-28 mt-0 ml-16  w-[85%] text-slate-500 bg-white md:w-[50%] md:ml-[35%] md:text-xl  md:mt-2 z-10"
      onSubmit={handleSubmit}
    >
      <label for="title" className="text-[#01dabb]">
        Title
      </label>
      <br />
      <input
        className="border border-slate-800 my-2 px-2 rounded-md md:w-[70%]"
        onChange={handleTitle}
        type="text"
        name="title"
        placeholder=""
        value={title}
        required
      />
      <br />
      <label for="detail" className="text-[#01dabb]">
        Description
      </label>
      <br />
      <textarea
        className="border border-slate-800 my-2 px-2 h-16 py-2 rounded-lg w-[70%]"
        onChange={handleDetail}
        type="text"
        name="detail"
        placeholder=""
        rows="2"
        cols="18"
        maxLength="36"
        value={detail}
        required
      ></textarea>
      <br />
      <label for="date" className="text-[#01dabb]">
        To be completed on
      </label>
      <br />
      <input
        className=" text-xl my-2 px-2 w-[70%] py-1 rounded-lg border border-slate-800"
        onChange={handleDay}
        type="date"
        name="day"
        min="2022-11-23"
        max="2023-12-31"
        value={day}
        required
      />
      <br />

      <button
        className="bg-[#01dabb] p-2 rounded-xl mt-2 ml-12 text-xl text-slate-700 md:text-2xl md:ml-32"
        type="submit"
      >
        submit
      </button>
    </form>
  );
}
export default NewTask;
