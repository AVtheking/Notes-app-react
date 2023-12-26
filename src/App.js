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
  const editNote = (id, newText) => {
    console.log(id, newText);
    const date=new Date();
    const newNotes = notes.map((note) =>
      note.id === id
        ? { id, text: newText, date: date.toLocaleDateString() }
        : note
    );
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  //useEffect is a hook that allows us to run a function after every render of the component
  //useEffect takes two arguments: a callback function and a dependency array
  //the callback function is the function that will run after every render
  //the dependency array is an array of variables that the useEffect hook will watch
  //if any of the variables in the dependency array change, the useEffect hook will run the callback function
  //if the dependency array is empty, the useEffect hook will only run the callback function once after the first render
  //if the dependency array is not provided, the useEffect hook will run the callback function after every render
  //if the dependency array is provided with variables, the useEffect hook will run the callback function after every render if any of the variables in the dependency array change
  //if the dependency array is provided with variables, the useEffect hook will run the callback function once after the first render if none of the variables in the dependency array change

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
          handleNoteEdit={editNote}
        />
      </div>
    </div>
  );
}

export default App;
