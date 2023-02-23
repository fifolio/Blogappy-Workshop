// IMPORT REACTS
import { useState } from "react";

// IMPORT MUI
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Btn from "@mui/material/Button";

export default function AddPost() {
  const [values, setValues] = useState({ title: "", body: "" });

  // const [errors, setErrors] = useState();

  const handleInputChange = (e) => {
    // Get the (Name of the Target), and Get the (value of the e)
    const { name, value } = e.target;

    // Call the function (setValues) in order to update the state
    setValues({
      [name]: value,
    });
  };

  const style = {
    form: {
      element: {
        marginBottom: "15px",
        fontWeight: "bold",
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <form onSubmit={handleSubmit}>
            <TextField
              name="title"
              helperText="Post title must contain 7-70 chars"
              label="Post Title"
              fullWidth
              sx={style.form.element}
              value={values.title}
              onChange={handleInputChange}
            />
            <TextField
              name="body"
              helperText="Post content must contain between 10- 240"
              label="Post Content"
              fullWidth
              multiline
              rows={6}
              sx={style.form.element}
              value={values.body}
              onChange={handleInputChange}
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
