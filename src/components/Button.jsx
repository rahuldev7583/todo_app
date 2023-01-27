import Delete from "./../trash.png";
function Button(props) {
  return (
    <div>
      <button
        className="ml-8 mb-4 relative top-1 md:ml-24"
        onClick={props.deleteClicked}
      >
        <img className="w-10" src={Delete} alt="trashImg" />
      </button>
    </div>
  );
}
export default Button;
