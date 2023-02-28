// IMPORT MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// IMPORT COMPONENTS
import Header from "./parts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SinglePost from "./pages/templates/SinglePost";
import AddPost from "./pages/forms/AddPost.jsx";
import UpdatePostPage from "./pages/UpdatePostPage.jsx";

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
              <Route element={<AddPost />} path="/add-post" />
              <Route element={<SinglePost />} path="/post/:id" />
              <Route element={<UpdatePostPage />} path="/update-post/:id" />
            </Routes>
          </Paper>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
