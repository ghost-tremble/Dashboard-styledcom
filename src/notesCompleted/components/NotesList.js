import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = ({ Notes, handleAddNote }) => {
  return (
    <div className="notes-list">
      {Notes.map((note) => {
        <Note id={note.id} text={Note.text} date={note.date} />;
      })}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
