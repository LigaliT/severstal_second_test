import { Box, Button, TextField } from "@mui/material";
import { memo } from "react";
import { ITextBoxProps } from "../../utils/propsinterfaces";

const TextBox = memo(({ handleSubmit, value, onChange }: ITextBoxProps) => {
  const styles = {
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px"
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={styles.box}>
      <TextField
        fullWidth
        placeholder="Enter a new note text"
        value={value}
        onChange={onChange}
        inputProps={{
          minLength: "3"
        }}
      />
      <Button disabled={value.length < 3} variant="outlined" type="submit">
        Add Note
      </Button>
    </Box>
  );
});

export default TextBox;
