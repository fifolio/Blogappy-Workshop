// MUI
import MuiDialog from "@mui/material/Dialog";
import Btn from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Dialog(props) {
  const { title, text, dialogOpen, setDialogOpen, onDialogConfirm } = props;

  return (
    <>
      <MuiDialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Delete {title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {text}. <br /> <br /> Are you sure you want to <b>delete</b> this
            item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Btn onClick={onDialogConfirm} variant="outlined">
            Confirm
          </Btn>
          <Btn onClick={() => setDialogOpen(false)} variant="contained">
            Cancel
          </Btn>
        </DialogActions>
      </MuiDialog>
    </>
  );
}
