// IMPORT MUI
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Btn from "@mui/material/Button";

export default function AddPost() {
  const style = {
    form: {
      element: {
        marginBottom: "15px",
      },
    },
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <form>
            <TextField
              name="title"
              helperText="Post title must contain 7-70 chars"
              label="Post Title"
              fullWidth
              sx={style.form.element}
            />
            <TextField
              name="content"
              helperText="Post content must contain between 10- 240"
              label="Post Content"
              fullWidth
              multiline
              rows={6}
              sx={style.form.element}
            />
            <Btn
              type="submit"
              py={1}
              variant="contained"
              fullWidth
              sx={style.form.element}
            >
              Submit
            </Btn>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
