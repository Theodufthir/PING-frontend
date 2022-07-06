import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { Stack } from "@mui/material";
import { lightTheme, darkTheme } from "./Themes";
import {useState} from "react";
import { Header } from './Header';
import { Bottom } from './Bottom';
import Body from './Body';
import { useRef } from "react";

export var fontSize = 25

function App() {
    // The light theme is used by default
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [font, updateFont] = useState([])
    const [isFileOpen, setFile] = useState(false)
    const [isGitOpen, setGit] = useState(false)
    const [isMvnOpen, setMvn] = useState(false)
    const [isOptOpen, setOpt] = useState(false)
    const inputFile = useRef(null);
    const isOverlayOpen = [isFileOpen, isMvnOpen, isGitOpen, isOptOpen]
    const setOverlay = [setFile, setMvn, setGit, setOpt]
    // This function is triggered when the Switch component is toggled
    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const handleDragStop = () => {
        updateFont(!font)
    };

    const opentab = (e) => {
        inputFile.current.click();
    }

    const changeFontSize = (event, value) => {
        fontSize = value/2
        updateFont(!font)
    }

  return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Stack direction='column'>
            {Header(isDarkTheme, changeTheme, changeFontSize, handleDragStop)}
            {Body(isOverlayOpen, setOverlay, opentab, inputFile)}
            {Bottom()}
        </Stack>
          
      </ThemeProvider>
  );
}

export default App;
