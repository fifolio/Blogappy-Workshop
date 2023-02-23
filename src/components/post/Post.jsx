// IMPORT MUI
import Card from "@mui/material/Card";
import Content from "@mui/material/CardContent";
import Typo from "@mui/material/Typography";
import Actions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import URL from "@mui/material/Link";

// IMPORT REACTS
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import FeaturedPost from "../post/Featured";
import Controls from "../../components/post/Controls";

export default function Post(props) {
  const { id, title, content, featured, snippet } = props;

  const classes = {
    root: {
      marginBottom: "1rem",
    },
  };

  return (
    <>
      {featured && <FeaturedPost id={id} title={title} content={content} />}
      {!featured && (
        <Card raised sx={classes.root}>
          <Controls />
          <Content>
            <Typo variant="h6" component="h3" gutterBottom>
              {snippet ? title.slice(0, 15) : title}
            </Typo>
            <Typo variant="body1" component="p">
              {snippet ? content.slice(0, 70) + "..." : content}
            </Typo>
          </Content>
          {snippet && (
            <Actions>
              <Button variant="contained" fullWidth>
                <URL
                  component={Link}
                  to={`/post/${id}`}
                  variant="button"
                  underline="none"
                  color="inherit"
                  sx={{ width: "100%" }}
                >
                  Read More
                </URL>
              </Button>
            </Actions>
          )}
        </Card>
      )}
    </>
  );
}
