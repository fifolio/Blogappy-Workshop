// IMPORT MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

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

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Paper>
            <Header
              checked={darkMode}
              onChange={() => {
                setDarkMode(!darkMode);
              }}
            />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<About />} path="/about" />
            </Routes>
          </Paper>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
