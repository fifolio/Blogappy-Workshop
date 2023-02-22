// IMPORT REACTS
import { useState } from "react";
import { useEffect } from "react";

// IMPORT MUIS
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// IMPORT COMPONENTS
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import FeaturedPost from "../components/FeaturedPost";

export default function Home() {
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
      <FeaturedPost />
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
          {posts &&
            posts.map((post) => {
              return (
                <Grid item md={6}>
                  <Post id={post.id} title={post.title} content={post.body} />
                </Grid>
              );
            })}
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
