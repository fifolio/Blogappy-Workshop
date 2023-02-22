// IMPORT REACTS
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// IMPORT MUIS
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typo from "@mui/material/Typography";

// IMPORT COMPONENTS
import Sidebar from "../components/Sidebar";

export default function SinglePost(props) {
  const { id } = useParams();

  const [post, setPost] = useState(undefined);
  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const fetchPost = async () => {
      const res = await fetch(URL);
      const post = await res.json();
      setPost(post);
    };

    fetchPost();
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
          {post && (
            <>
              <Typo
                item
                xs={12}
                sx={{ margin: ".5rem auto 1.5rem auto" }}
                component="h1"
                variant="h5"
              >
                {post.title}
              </Typo>
              <Typo component="p" variant="body1" gutterBottom>
                {post.body}
              </Typo>
            </>
          )}
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
