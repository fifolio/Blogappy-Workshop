// IMPORT MUI
import Grid from "@mui/material/Grid";
import Typo from "@mui/material/Typography";
import Btn from "@mui/material/Button";

export default function FeaturedPost(props) {
  const { id, title, content } = props;
  const classes = {
    root: {
      maxWidth: "70%",
      margin: "3rem auto",
      backgroundColor: "#555",
      padding: "1rem",
      color: "#fff",
      borderRadius: "25px",
    },
    FPsecs: {
      paddingBottom: "1rem",
    },
  };

  return (
    <>
      <Grid container sx={classes.root} columnSpacing={2}>
        <Grid item xs={12} md={4}>
          <Typo variant="h5" component="h3" sx={classes.FPsecs}>
            {title}
          </Typo>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typo variant="body1" component="p" sx={classes.FPsecs}>
            {content}
          </Typo>
          <Btn variant="contained">Read More</Btn>
        </Grid>
      </Grid>
    </>
  );
}
