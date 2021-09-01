/* eslint-disable no-lone-blocks */
import React from "react";
import AddNote from "./addnote";
import SingleNote from "./singlenote";

const NoteList = ({ note, saveNote, delItem }) => {
  return (
    <section className="notes-container">
      {note.map((item) => {
        const { text, id, date } = item;
        return (
          <SingleNote
            text={text}
            id={id}
            date={date}
            delItem={delItem}
            key={id}
          />
        );
      })}
      <AddNote saveNote={saveNote} />
    </section>
  );
};

export default NoteList;
