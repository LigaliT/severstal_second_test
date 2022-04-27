import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import { useState } from "react";
import { IEditNodeProps } from "../../utils/propsinterfaces";

const EditNoteDialog = ({
  id,
  text,
  open,
  handleClose,
  updateText
}: IEditNodeProps) => {
  const [newText, setNewText] = useState(text);

  return (
    <Dialog open={open} onClose={() => handleClose(!open)}>
      <DialogTitle>Edit Note</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          defaultValue={text}
          onChange={(e) => setNewText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="warning"
          variant="outlined"
          onClick={() => {
            setNewText("");
          }}
        >
          Clear
        </Button>
        <Button
          color="success"
          variant="outlined"
          disabled={newText.length < 3}
          onClick={() => {
            handleClose(!open);
            updateText(id, newText);
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditNoteDialog;
