import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charLimit = 150;

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSave();
    }
  };

  return (
    <div className="bg-[#C9F7CA] drop-shadow-xl rounded-lg p-[1rem] h-[170px] flex flex-col justify-between">
      <textarea
        id="p_wrap"
        className="bg-[#C9F7CA] placeholder:text-neutral-600 text-2xl border-none resize-none focus:outline-none"
        value={noteText}
        name=""
        cols="10"
        rows="8"
        placeholder="Type a new note...."
        onChange={handleChange}
        onKeyDown={handleKeypress}
      ></textarea>
      <div className="flex items-center justify-between">
        <small>{charLimit - noteText.length} Remaining</small>
        <button
          type="submit"
          onClick={handleSave}
          className="bg-emerald-900 border-none rounded-2xl px-4 py-0.5 hover:bg-[#fff] hover:text-black cursor-pointer text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
