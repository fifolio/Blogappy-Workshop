// IMPORT REACTS
import { useState } from "react";
import { useEffect } from "react";

// IMPORT MUIS
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typo from "@mui/material/Typography";

// IMPORT COMPONENTS
import Sidebar from "../components/Sidebar";

export default function SinglePost(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const fetchPosts = async () => {
      const res = await fetch(URL);
      const posts = await res.json();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

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
        <Grid items columnSpacing={1} xs={7} sx={classes.main}>
          <Typo
            item
            xs={12}
            sx={{ margin: ".5rem auto 1.5rem auto" }}
            component="h1"
            variant="h5"
          >
            Post title goes here
          </Typo>
          <Typo component="p" variant="body1" gutterBottom>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            asperiores a facilis maiores sequi praesentium cumque voluptatem
            rerum similique vel.
          </Typo>
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
