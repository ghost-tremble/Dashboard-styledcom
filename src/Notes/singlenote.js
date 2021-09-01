import React from "react";
const SingleNote = ({ text, id, date, delItem }) => {
  return (
    <div className="single-note list">
      <p>{text}</p>
      <div>
        {/**date */} <p>date added:{date}</p>
        <button onClick={() => delItem(id)} className="delbtn">
          delete
        </button>
      </div>
    </div>
  );
};

export default SingleNote;
