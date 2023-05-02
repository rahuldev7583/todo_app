const date = new Date().toDateString();
const currentTime = new Date();
const hour = currentTime.getHours();
const minute = currentTime.getMinutes();
const amPm = hour >= 12 ? "PM" : "AM";

let hour12 = hour % 12;
hour12 = hour12 ? hour12 : 12;

const time = `${hour12}:${minute < 10 ? "0" : ""}${minute} ${amPm}`;

function Header() {
  return (
    <div className="text-center my-2 md:text-xl">
      <h1 className="font-black text-5xl text-[#01dabb] ">Todo</h1>
      <h2 className="text-slate-500">{date}</h2>
      <h2 className="font-bold text-[#01dabb]">{time}</h2>
    </div>
  );
}
export default Header;
