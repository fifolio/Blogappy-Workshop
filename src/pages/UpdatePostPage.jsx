// REACT
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// IMPORT MUI
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typo from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// IMPORT COMPONENTS
import UpdatePostForm from "../components/forms/UpdatePostForm";

export default function UpdatePostPage() {
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
  }, [id]);

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
              Update Post
            </Typo>
            <Typo variant="body" component="h5">
              Update your post using the form below
            </Typo>
          </Grid>
          <Divider sx={3} />
        </Grid>
        <Grid item>{post && <UpdatePostForm postData={post} />}</Grid>
      </Paper>
    </>
  );
}
