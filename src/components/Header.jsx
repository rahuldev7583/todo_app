const date = new Date().toDateString();
const currentTime = new Date();
const time = currentTime.toLocaleTimeString().split("");
const hour = currentTime.getHours();
let cutStr = 3;
if(hour >= 10){
  cutStr = 4;
}
for (let i = time.length - 4; i > cutStr; i--) {
  delete time[i];
}
time.join("");
function Header() {
  return (
    <div className="">
      <div className="">
        <h2>{date}</h2>
        <h2>{time}</h2>
      </div>
      <h1>Tasks</h1>
      <h2 className="">Manage your tasks here</h2>
    </div>
  );
}
export default Header;
