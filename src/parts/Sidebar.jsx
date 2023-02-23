// IMPORT MUI
import Card from "@mui/material/Card";
import Content from "@mui/material/CardContent";
import Typo from "@mui/material/Typography";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

export default function Sidebar() {
  const classes = {
    root: {
      marginBottom: "1rem",
    },
  };

  return (
    <>
      <Card raised sx={classes.root}>
        <Content>
          <Typo variant="h6" component="h6">
            About Us
          </Typo>
          <Typo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eveniet repellat vero nisi cum at illo alias cumque porro quam?
          </Typo>
        </Content>
      </Card>

      <Card>
        <Content>
          <Typo variant="h6" component="h6">
            Our Categories
          </Typo>
          <MenuList raised sx={classes.root}>
            <MenuItem>HTML</MenuItem>
            <MenuItem>CSS</MenuItem>
            <MenuItem>Javascript</MenuItem>
            <MenuItem>React</MenuItem>
            <MenuItem>MUI</MenuItem>
            <MenuItem>Node</MenuItem>
          </MenuList>
        </Content>
      </Card>
    </>
  );
}
