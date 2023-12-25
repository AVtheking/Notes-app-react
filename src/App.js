import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import Search from "./components/Search_Bar";

function App() {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    console.log(text);
    const date = new Date();
    const newNote = {
      id: notes.length + 1,
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    console.log("Read from local storage:", savedNotes);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0)
      localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchText={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleNoteSave={addNote}
          handleNoteDelete={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
