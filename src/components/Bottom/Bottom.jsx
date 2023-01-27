import Gmail from "./gmail.png";
import Twitter from "./twitter.png";
import GitHub from "./github.png";
import Medium from "./medium.png";

function Bottom() {
  return (
    <div
      className={
        "fixed bottom-0 left-0 right-0 text-slate-500 text-center text bg-[#01dabb] mt-2 pt-1 md:text-xl md:relative md:top-[26.3rem]"
      }
    >
      created by
      <a
        href="https://legendary-paprenjak-c7072d.netlify.app/"
        className="underline ml-2"
      >
        Rahul Dev
      </a>
      <ul className="flex md:ml-[34%]">
        <li>
          <a href="mailto: rahuldev7583@gmail.com" className="">
            <img className="ml-10 w-10 md:w-12" src={Gmail} alt="GmailIcon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/rahuldev_75">
            <img
              className="ml-10 w-10 md:w-12"
              src={Twitter}
              alt="TwitterIcon"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/rahuldev7583">
            <img
              className="ml-10 w-10 md:w-12"
              src={GitHub}
              alt="GitHub Icon"
            />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@rahuldev7583">
            <img className="ml-10 w-10 md:w-12" src={Medium} alt="MediumIcon" />
          </a>
        </li>
      </ul>
      <p className="text-xs md:text-lg">
        © 2022 Rahul Dev. All right reserved.
      </p>
    </div>
  );
}
export default Bottom;
