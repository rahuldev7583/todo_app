const date = new Date().toDateString();
const currentTime = new Date();
const time = currentTime.toLocaleTimeString().split("");
const hour = currentTime.getHours();
let cutStr = 3;
if (hour >= 10 && hour <= 12) {
  cutStr = 4;
}
for (let i = time.length - 4; i > cutStr; i--) {
  delete time[i];
}
time.join("");
function Header() {
  return (
    <div className="text-center my-2 ">
      <h1 className="font-black text-5xl text-[#01dabb]">Todo</h1>
      <h2 className="text-slate-500">{date}</h2>
      <h2 className="font-bold text-[#01dabb]">{time}</h2>
    </div>
  );
}
export default Header;
