import Card from "@mui/material/Card";
import Content from "@mui/material/CardContent";
import Typo from "@mui/material/Typography";
import Actions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Media from "@mui/material/CardMedia";

export default function Post(props) {
  const { title, content } = props;

  const classes = {
    root: {
      marginBottom: "1rem",
    },
  };

  return (
    <>
      <Card raised sx={classes.root}>
        <Media image="https://via.placeholder.com/200x100" component="img" />
        <Content>
          <Typo variant="h6" component="h3" gutterBottom>
            {title && title.slice(0, 20)}
          </Typo>
          <Typo variant="body1" component="p">
            {content && content.slice(0, 100) + "..."}
          </Typo>
        </Content>
        <Actions>
          <Button variant="contained" fullWidth>
            Read More
          </Button>
        </Actions>
      </Card>
    </>
  );
}
