//* IMPORT MUI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import URL from "@mui/material/Link";

// IMPORT REACT
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import Switch from "../components/shared/Switch";

export default function Header(props) {
  const { checked, onChange } = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const gridLinks = {
    margin: ".4rem auto",
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid
            container
            direction={matches ? "column" : "row"}
            justifyContent={matches ? "center" : "space-between"}
            alignItems="center"
          >
            <Grid item container xs="auto">
              <Grid item>
                <IconButton color="inherit">
                  <AppsIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{ marginTop: "5px", fontWeight: 'bold' }}
                >
                  NAWBLOG
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs="auto" columnSpacing={2}>
              <Grid item sx={gridLinks}>
                <URL
                  component={Link}
                  to="/"
                  variant="button"
                  underline="none"
                  color="inherit"
                >
                  Home
                </URL>
              </Grid>
              <Grid item sx={gridLinks}>
                <URL
                  component={Link}
                  to="/add-post"
                  variant="button"
                  underline="none"
                  color="inherit"
                >
                  Add Post
                </URL>
              </Grid>
              <Grid item sx={gridLinks}>
                <URL
                  component={Link}
                  to="/about"
                  variant="button"
                  underline="none"
                  color="inherit"
                >
                  About
                </URL>
              </Grid>
              <Grid item>
                ☀️
                <Switch checked={checked} onChange={onChange} />
                🌙
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
