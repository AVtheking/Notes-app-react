import AddNote from "./AddNote";
import Note from "./note";

const NoteList = ({
  notes,
  handleNoteSave,
  handleNoteDelete,
  handleNoteEdit,
}) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={handleNoteDelete}
          handleEditNote={handleNoteEdit}
        />
      ))}
      <AddNote handleAddNote={handleNoteSave} />
    </div>
  );
};
export default NoteList;
