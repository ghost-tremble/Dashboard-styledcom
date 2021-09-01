const Note = ({ id, text, date }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <small className="delete-icon">x</small>
      </div>
    </div>
  );
};
export default Note;
