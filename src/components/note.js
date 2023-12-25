import { MdDeleteForever as MDeleteForever } from "react-icons/md";
const Note = ({ id, text, date, deleteNote }) => {
  const handleDeleteClick = () => {
    console.log(id);
    deleteNote(id);
  };
  return (
    <div className="note">
      <span className="note-text"> {text}</span>
      <div className="note-footer">
        <small> {date}</small>
        <MDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};
export default Note;
