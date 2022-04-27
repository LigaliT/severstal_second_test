import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Stack,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { INoteProps } from "../../utils/propsinterfaces";
import { useState } from "react";
import EditNoteDialog from "./EditNoteDialog";

const Note = ({ note, removeNote, updateText }: INoteProps) => {
  const styles = {
    stack: {
      margin: "10px 0px"
    }
  };
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${note.id}-content`}
          id={`${note.id}-header`}
        >
          <Typography>{note.text.slice(0, 20)}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{note.text}</Typography>
        </AccordionDetails>
      </Accordion>
      <Stack direction="row" spacing={1} sx={styles.stack}>
        <Chip
          clickable
          onClick={() => setOpen(!open)}
          icon={<EditIcon />}
          color="primary"
          label="Edit"
        />
        <Chip
          clickable
          icon={<DeleteIcon />}
          onClick={() => removeNote(note.id)}
          color="error"
          label="Delete"
        />
      </Stack>
      <EditNoteDialog
        id={note.id}
        text={note.text}
        open={open}
        handleClose={setOpen}
        updateText={updateText}
      />
    </Box>
  );
};

export default Note;
