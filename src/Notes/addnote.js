import React from "react";
const AddNote = ({ saveNote }) => {
  const CharacterLimit = 200;
  const [lengthy, setLenthy] = React.useState("");

  const handleSave = () => {
    if (lengthy.trim().length > 0) {
      saveNote(lengthy);
      setLenthy("");
    }
  };
  return (
    <div className="single-note">
      <textarea
        maxLength={CharacterLimit}
        name="w3review"
        rows="6"
        cols="50 "
        value={lengthy}
        onChange={(e) => {
          e.preventDefault();
          setLenthy(e.target.value);
        }}
        placeholder="type to add a node"
      ></textarea>
      <div className="save-section">
        {/**date */} <p>{CharacterLimit - lengthy.length} :remaining</p>
        <a href="#" className="save-btn" onClick={handleSave}>
          Save
        </a>
      </div>
    </div>
  );
};

export default AddNote;
