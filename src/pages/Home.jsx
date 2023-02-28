// IMPORT REACTS
import { useState } from "react";
import { useEffect } from "react";

// IMPORT MUIS
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Typo from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";

// IMPORT COMPONENTS
import Post from "../components/post/Post";
import Sidebar from "../parts/Sidebar";
import requests from "../api/posts/requests";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [page_pagi, setPage] = useState(1);
  const [pagesNum, setPagesNum] = useState(1);
  useEffect(() => {
    const fetchPosts = async (page) => {
      const data = await requests.getAll(page);
      const { posts, pagesCount } = data;
      setPagesNum(pagesCount);
      setPosts(posts);
    };
    fetchPosts(page_pagi);
  }, [page_pagi]);

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
      <Post
        featured
        id={0}
        title="This is a featured post"
        content="This is a content"
      />
      <Grid
        container
        direction={matches ? "column" : "row"}
        sx={classes.root}
        justifyContent="space-evenly"
      >
        <Grid
          item
          container
          columnSpacing={1}
          xs={7}
          sx={classes.main}
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            sx={{ margin: ".5rem auto 1.5rem auto" }}
            component="h2"
            variant="h2"
          >
            Posts
          </Grid>
          {posts && posts.length > 0 ? (
            posts.map((post) => {
              return (
                <Grid item md={6}>
                  <Post
                    snippet
                    id={post.id}
                    title={post.title}
                    content={post.body}
                  />
                </Grid>
              );
            })
          ) : (
            <CircularProgress />
          )}
          <center>
            <Grid item xs={12}>
              <Pagination
                count={pagesNum}
                onChange={(e, value) => {
                  setPage(value);
                }}
              />
            </Grid>
          </center>
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
