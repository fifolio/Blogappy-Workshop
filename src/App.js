// IMPORT MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// IMPORT COMPONENTS
import Header from "./parts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SinglePost from "./pages/templates/SinglePost";
import AddPost from './pages/forms/AddPost.jsx';

// IMPORT REACTs
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: !darkMode ? "light" : "dark",
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
              <Route element={<About />} path="/about" />
              <Route element={<SinglePost />} path="/post/:id" />
              <Route element={<AddPost />} path="/add-post"/>
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
3- I didn't understand why you used ...values to get all values!
4-

*/
