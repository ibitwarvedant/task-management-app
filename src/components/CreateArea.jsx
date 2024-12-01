import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  function changed(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function clicked(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote(() => {
      return { title: "", content: "" };
    });
  }
  return (
    <div>
      <form onSubmit={clicked}>
        <input
          onChange={changed}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={changed}
          name="content"
          placeholder="Details..."
          rows="3"
        />
        <button><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
