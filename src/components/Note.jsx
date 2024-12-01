import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ClearIcon from '@mui/icons-material/Clear';
function Note({
  id,
  title,
  content,
  status,
  delete: deleteNote,
  onEdit,
  isEditing,
  updateNote,
  toggleStatus,
}) {
  const [editNote, setEditNote] = useState({ title, content });

  function handleChange(event) {
    const { name, value } = event.target;
    setEditNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function handleUpdate() {
    updateNote(id, editNote);
  }

  return (
    <div className={`note ${status}`}>
      {isEditing ? (
        <div>
          <input
            name="title"
            value={editNote.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <textarea
            name="content"
            value={editNote.content}
            onChange={handleChange}
            placeholder="Content"
            rows="3"
          />
          <button onClick={handleUpdate}>
            <TaskAltIcon />
          </button>
        </div>
      ) : (
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
          <div><p style={{fontSize:"12px"}}>Status: <strong>{status}</strong></p></div>
          <button onClick={() => toggleStatus(id)}>
            {status === "incomplete" ? <DoneOutlineIcon/> : <ClearIcon/>}
          </button>
          <button onClick={() => deleteNote(id)}>
            <DeleteIcon />
          </button>
          <button onClick={() => onEdit(id)}>
            <EditIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default Note;
