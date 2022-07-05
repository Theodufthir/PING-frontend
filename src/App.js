import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { Stack } from "@mui/material";
import { lightTheme, darkTheme } from "./Themes";
import {useState} from "react";
import { Header } from './Header';
import { Bottom } from './Bottom';
import Body from './Body';

export var fontSize = 50

const changeFontSize = (event, value) => {
    fontSize = value
    console.log(fontSize)
}

function App() {
    // The light theme is used by default
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [font, updateFont] = useState([])
    // This function is triggered when the Switch component is toggled
    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const handleDragStop = () => {
        updateFont(!font)
    };

  return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Stack direction='column'>
            {Header(isDarkTheme, changeTheme, changeFontSize, handleDragStop)}
            {Body(fontSize)}
            {Bottom()}
        </Stack>
          
      </ThemeProvider>
  );
}

export default App;
