// IMPORT REACTs
import { useState } from "react";

// IMPORT MUI
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Collapse from "@mui/material/Collapse";
import SettingsIcon from "@mui/icons-material/Settings";

// IMPORT COMPONENTS
import Dialog from "../shared/Dialog";

export default function Controls(props) {
  const { postID, postTitle, postContent } = props;
  const [open, setOpen] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const deleteAnItem = () => {
    console.log(`item with id ${postID} will be deleted`);
    setDialogOpen(false);
  };
  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <IconButton color="primary" onClick={() => setOpen(!open)}>
            <SettingsIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <IconButton color="info" href={`/update-post/${postID}`}>
              <EditIcon />
            </IconButton>
            <IconButton color="error" onClick={() => setDialogOpen(true)}>
              <DeleteIcon />
            </IconButton>
          </Collapse>
        </Grid>
      </Grid>
      <Dialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        onDialogConfirm={deleteAnItem}
        title={postTitle}
        text={postContent}
      />
    </>
  );
}
