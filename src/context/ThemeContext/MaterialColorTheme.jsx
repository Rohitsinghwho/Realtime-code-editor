import { createTheme } from "@mui/material/styles";

// VS Code Light+ style
const vscodeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007acc", // VS Code blue
    },
    background: {
      default: "#ffffff", // editor background
      paper: "#f3f3f3",   // panels
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
    },
  },
});

// VS Code Dark+ style
const vscodeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#007acc", // VS Code blue
    },
    background: {
      default: "#1e1e1e", // editor dark background
      paper: "#252526",   // sidebar / panels
    },
    text: {
      primary: "#d4d4d4",
      secondary: "#aaaaaa",
    },
  },
});

export { vscodeLight, vscodeDark };
