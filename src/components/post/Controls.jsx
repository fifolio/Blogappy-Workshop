// IMPORT REACTs
import { useState } from "react";

// IMPORT MUI
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Collapse from "@mui/material/Collapse";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Controls() {
  const [open, setOpen] = useState(false);

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
            <IconButton color="info">
              <EditIcon />
            </IconButton>
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </Collapse>
        </Grid>
      </Grid>
    </>
  );
}
