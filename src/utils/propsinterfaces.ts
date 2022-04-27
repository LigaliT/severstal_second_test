import { INote } from "./notes";

interface IPropsFunctions {
  removeNote: (id: number) => void;
  updateText: (id: number, text: string) => void;
}

export interface ITextBoxProps {
  handleSubmit: (e: React.FormEvent) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface INotesProps extends IPropsFunctions {
  localNotes: INote[];
}

export interface INoteProps extends IPropsFunctions {
  note: INote;
}

export interface IEditNodeProps extends Pick<IPropsFunctions, "updateText"> {
  id: number;
  text: string;
  open: boolean;
  handleClose: (open: boolean) => void;
}
