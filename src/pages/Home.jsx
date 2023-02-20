// IMPORT MII
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// IMPORT COMPONENTS
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const classes = {
    root: {
      marginTop: "1.8rem",
    },
    main: {
      padding: "1rem",
    },
    sidebar: {
      padding: "1rem",
    },
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid
        container
        direction={matches ? "column" : "row"}
        sx={classes.root}
        justifyContent="space-evenly"
      >
        <Grid item container columnSpacing={1} xs={7} sx={classes.main}>
          <Grid
            item
            xs={12}
            sx={{ margin: ".5rem auto 1.5rem auto" }}
            component="h2"
            variant="h2"
          >
            Blogappy Posts
          </Grid>
          <Grid item md={6}>
            <Post />
          </Grid>
          <Grid item md={6}>
            <Post />
          </Grid>
          <Grid item md={6}>
            <Post />
          </Grid>
          <Grid item md={6}>
            <Post />
          </Grid>
        </Grid>
        <Grid item xs={4} sx={classes.sidebar}>
          <Grid
            item
            xs={12}
            sx={{ margin: ".5rem auto 1.5rem auto" }}
            component="h2"
            variant="h2"
          >
            Discover More
          </Grid>
          <Sidebar />
        </Grid>
      </Grid>
    </>
  );
}
