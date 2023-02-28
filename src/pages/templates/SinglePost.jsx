// IMPORT REACTS
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// IMPORT MUIS
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Typo from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

// IMPORT COMPONENTS
import Sidebar from "../../parts/Sidebar";
import Post from "../../components/post/Post";
import requests from "../../api/posts/requests";

export default function SinglePost() {
  const { id } = useParams();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    const URL = `/posts/${id}`;
    const fetchPost = async () => {
      const response = await fetch(URL);
      const post = await response.json();
      setPost(post);
    };
    fetchPost();
  }, [id]);

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

  return (
    <>
      <Grid
        container
        direction={matches ? "column" : "row"}
        sx={classes.root}
        justifyContent="space-evenly"
      >
        <Grid items columnSpacing={1} xs={7} sx={classes.main}>
          {post && post !== false ? (
            <>
              <Post id={post.id} title={post.title} content={post.body} />
            </>
          ) : (
            <center>
              <CircularProgress />
            </center>
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
