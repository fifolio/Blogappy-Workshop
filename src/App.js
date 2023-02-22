// IMPORT MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";

// IMPORT REACTs
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: !darkMode ? "dark" : "light",
    },
  });

  const classes = {
    paper: {
      boxShadow: "none",
      position: "relative",
      height: "100%",
    },
  };

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Paper sx={classes.paper}>
            <Header
              checked={darkMode}
              onChange={() => {
                setDarkMode(!darkMode);
              }}
            />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route elemen t={<About />} path="/about" />
              <Route element={<SinglePost />} path="/post/:id" />
            </Routes>
          </Paper>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

/*

1- Passing Props through Router NOT WORKING
2- The Slice method in 00:00 NOT WORKING
  {content && content.slice(0, 100) + "..."}
3-

*/
