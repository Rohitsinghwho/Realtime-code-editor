import React, { useContext } from "react";
import { Editor } from "@monaco-editor/react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider } from "@emotion/react";
import ThemeContext from "../../context/ThemeContext/ThemeContext.js";
import {
  vscodeDark,
  vscodeLight,
} from "../../context/ThemeContext/MaterialColorTheme";
import "./MEditor.css"

const MEditor = () => {
  const [CodingLang, setCodingLang] = React.useState("");
  const { darkMode } = useContext(ThemeContext);
  const theme = darkMode ? vscodeDark : vscodeLight;
  const SUPPORTED_LANG = [
    { id: 1, language: "c++" },
    { id: 2, language: "javascript" },
    { id: 3, language: "php" },
    { id: 4, language: "c" },
    { id: 5, language: "typescript" },
    { id: 6, language: "golang" },
    { id: 7, language: "rust" },
    { id: 8, language: "java" },
  ];

  const handleChange = (event) => {
    setCodingLang(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="Resize_box"
        component={"section"}
        sx={{
          height: "70vh",
          width:"60vw",
          fontFamily: "Fira Code, monospace",
          borderRadius:'20px',
          bgcolor: theme.palette.background.default,
          resize:"horizontal",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <FormControl sx={{ p: 1, m: 2, width: "15vw" }}>
            <InputLabel id="coding-lang-label">Coding Lang?</InputLabel>
            <Select
              labelId="coding-lang-label"
              id="coding-lang"
              value={CodingLang}
              label="Age"
              sx={{
                backgroundColor: theme.palette.background.paper,
                maxHeight: "6vh",
                fontFamily: "Fira Code, monospace",
              }}
              onChange={handleChange}
            >
              {SUPPORTED_LANG.map((item) => (
                <MenuItem
                  value={item.language}
                  key={item.id}
                  sx={{ maxHeight: "4vh", fontFamily: "Fira Code, monospace" }}
                >
                  {item.language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Editor
          defaultLanguage="javascript"
          defaultValue="// some comment"
          
          theme={darkMode ? "vs-dark" : "vs-light"}
          options={{
            fontSize: 16,
            fontFamily: "Fira Code, monospace",
            fontWeight: 400,
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default MEditor;
