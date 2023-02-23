// IMPORT MUI
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typo from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// IMPORT COMPONENTS
import AddPostForm from "../../components/forms/AddPost";

export default function AddPost() {
  return (
    <>
      <Paper sx={{ position: "static", minHeight: "100vh", padding: 0 }}>
        <Grid
          container
          justifyContent="center"
          textAlign="center"
          sx={{ maxWidth: "80%", mx: "auto", padding: "2" }}
        >
          <Grid item m={5}>
            <Typo variant="h4" component="h4" sx={{ fontWeight: "bold" }}>
              Add Post
            </Typo>
            <Typo variant="body" component="h5">
              Add your new post using the form below
            </Typo>
          </Grid>
          <Divider sx={3} />
        </Grid>
        <Grid item>
          <AddPostForm />
        </Grid>
      </Paper>
    </>
  );
}
