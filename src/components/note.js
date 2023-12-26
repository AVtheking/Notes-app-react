import { useState } from "react";
import { MdCheck, MdDelete, MdEdit } from "react-icons/md";
const Note = ({ id, text, date, deleteNote, handleEditNote }) => {
  const handleDeleteClick = () => {
    console.log(id);
    deleteNote(id);
  };
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    // setEditText(text);
  };
  const handleTextChange = (event) => {
    setEditText(event.target.value);
  };
  const handleEditClick = () => {
    handleEditNote(id, editText);
    toggleEditMode();
    console.log(editText);
  };

  // return (
  //   <div className="note">
  //     {isEditing ? (
  //       <input
  //         className="edit-text"
  //         type="text"
  //         value={editText}
  //         onChange={handleTextChange}
  //         onBlur={handleEditClick}
  //       />
  //     ) : (
  //       <span className="note-text">{text}</span>
  //     )}
  //     <div className="note-footer">
  //       <small> {date}</small>
  //       {isEditing ? (
  //         <button onClick={handleEditClick}>Save</button>
  //       ) : (
  //         <MDeleteForever
  //           className="delete-icon"
  //           size="1.3em"
  //           onClick={handleDeleteClick}
  //         />
  //       )}
  //       <button onClick={toggleEditMode}>
  //         {isEditing ? "Cancel" : "Edit"}
  //       </button>
  //     </div>
  //   </div>
  // );
  return (
    <div className="note">
      {isEditing ? (
        <input
          className="edit-text"
          value={editText}
          type="text"
          onChange={handleTextChange}
        ></input>
      ) : (
        <span className="note-text">{text}</span>
      )}
      <div className="note-footer">
        <small>{date}</small>
        <div className="note-footer-inside">
          {isEditing ? (
            <MdCheck className="icon" size="1.3em" onClick={handleEditClick} />
          ) : (
            <>
              <MdEdit className="icon" size="1.3em" onClick={toggleEditMode} />

              <MdDelete
                className="icon"
                size="1.3em"
                onClick={handleDeleteClick}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
