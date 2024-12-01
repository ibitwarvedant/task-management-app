import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, { ...newNote, status: "incomplete" }]);
  }

  function deleteItem(id) {
    let perm = confirm("Do you want to Delete Item?");
    if (perm === true) {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
    }
    
  }

  function startEditing(id) {
    setEditingId(id);
  }

  function updateNote(id, updatedNote) {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) => (index === id ? updatedNote : note))
    );
    setEditingId(null); // Exit editing mode after updating
  }

  function toggleStatus(id) {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) => {
        if (index === id) {
          return {
            ...note,
            status: note.status === "incomplete" ? "complete" : "incomplete",
          };
        }
        return note;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          status={note.status}
          delete={deleteItem}
          onEdit={startEditing}
          isEditing={editingId === index}
          updateNote={updateNote}
          toggleStatus={toggleStatus}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
