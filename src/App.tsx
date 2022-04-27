import { Container } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { notes, INote } from "./utils/notes";
import TextBox from "./components/UI/TextBox";
import Notes from "./components/UI/Notes";

export default function App() {
  const [value, setValue] = useState<string>("");
  const [localNotes, setLocalNotes] = useState<INote[]>(notes);

  useEffect(() => {
    if (localStorage.getItem("notes") !== null)
      setLocalNotes(JSON.parse(localStorage.getItem("notes")!));
  }, []);

  const id = useMemo(() => Math.max(...localNotes.map((n) => n.id), 0), [
    localNotes
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId: number = id + 1;
    const newNote = {
      id: newId,
      text: value
    };
    const newLocalNotes = localNotes.concat(newNote);
    setLocalNotes(newLocalNotes);
    localStorage.setItem("notes", JSON.stringify(newLocalNotes));
    setValue("");
  };

  const removeNote = (id: number) => {
    const filteredNotes = localNotes.filter((n) => n.id !== id);
    setLocalNotes(filteredNotes);
    localStorage.setItem("notes", JSON.stringify(filteredNotes));
  };

  const updateText = (id: number, text: string) => {
    const updatedNotes = localNotes.map((note) =>
      note.id === id
        ? {
            ...note,
            text
          }
        : note
    );
    setLocalNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <Container>
      <TextBox
        handleSubmit={handleSubmit}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value.trim())
        }
      />
      <Notes
        localNotes={localNotes}
        removeNote={removeNote}
        updateText={updateText}
      />
    </Container>
  );
}
