function Button(props) {
  return (
    <div>
      
      <button
        className="bg-black text-white  p-2 rounded"
        onClick={props.deleteClicked}
      >
        Delete
      </button>
    </div>
  );
}
export default Button;
