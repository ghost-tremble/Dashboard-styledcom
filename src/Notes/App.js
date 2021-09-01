import React from "react";
import { useState } from "react";
import SingleNote from "./singlenote.js";
import AddNote from "./addnote.js";
import NoteList from "./NoteList.js";
import { useEffect } from "react";
import "./index.css";
const App = () => {
  let date = new Date();
  const [searchText, setSearchText] = React.useState("");
  const [noteList, setNoteList] = React.useState([]);
  const handleSave = (saved) => {
    let savedNote = {
      id: saved.length,
      text: saved,
      date: date.toLocaleDateString(),
    };

    const newNote = [...noteList, savedNote];
    setNoteList(newNote);
  };
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNoteList(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(noteList));
  }, [noteList]);

  const handleDelete = (id) => {
    const newList = noteList.filter((note) => note.id !== id);
    setNoteList(newList);
  };

  const [bgcolor, setBgColor] = useState({ back: "#fff", color: "#000" });

  const toggle = () => {
    if (bgcolor.back === "#fff" && bgcolor.color === "#000") {
      setBgColor({ ...bgcolor, back: "#000", color: "#fff" });
    } else {
      setBgColor({ ...bgcolor, back: "#fff", color: "#000" });
    }
  };
  return (
    <div className="cover" style={{ backgroundColor: bgcolor.back }}>
      <section className="main-container">
        <header className="section-header">
          <h1 style={{ color: bgcolor.color }}>Notes</h1>
          <a
            href="#"
            className="Toggle-btn"
            onClick={() => {
              toggle();
            }}
          >
            {" "}
            Toggle Mode
          </a>
        </header>
        <div className="search-bar">
          <input
            type="search"
            className="notes-search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="what are you looking for"
          />
        </div>

        <div className="">
          <NoteList
            note={noteList.filter((note) => note.text.includes(searchText))}
            delItem={handleDelete}
            saveNote={handleSave}
          />
          );
        </div>
      </section>
    </div>
  );
};

export default App;
