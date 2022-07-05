import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { lightTheme, darkTheme } from "./Themes";
import {useState} from "react";
import {AppBar, IconButton, Slider, Stack, Switch, Toolbar, Typography} from "@mui/material";
import TextFieldsRoundedIcon from "@mui/icons-material/TextFieldsRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import { Header } from './Header';
import Body from './Body';

function App() {
    // The light theme is used by default
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // This function is triggered when the Switch component is toggled
    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

  return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          {Header(isDarkTheme, changeTheme)}
      </ThemeProvider>
  );
}

export default App;
