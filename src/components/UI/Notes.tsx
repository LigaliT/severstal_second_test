import { Box } from "@mui/material";
import { INotesProps } from "../../utils/propsinterfaces";
import Note from "./Note";

const Notes = ({ localNotes, removeNote, updateText }: INotesProps) => {
  return (
    <Box mt={2}>
      {localNotes.map((n, i) => (
        <Note
          key={i}
          note={n}
          removeNote={removeNote}
          updateText={updateText}
        />
      ))}
    </Box>
  );
};

export default Notes;
