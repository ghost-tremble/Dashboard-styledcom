import React from "react";
import { useState } from "react";
import Notelist from "./components/NotesList";

import "./index.css";
import { nanoid } from "nanoid";
const App = () => {
  const [note, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first",
      date: "15.04,2021",
    },
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = { ...newNote, newNote };
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = note.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Notelist Notes={note} handleAddNote={addNote} />
    </div>
  );
};

export default App;
