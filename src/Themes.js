import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        text: {
            primary: '#000000'
        },
        background: {
            main: '#FFFFFF'
        },
        primary: {
            main: '#FFFFFF'
        },
        secondary: {
            main: '#898989'
        },
        icons: {
            main: '#000000'
        }

    },
    typography: {
        color: '#FF0000'
    }
});

export const darkTheme = createTheme({
    palette: {
        text: {
            primary: '#FFFFFF'
        },
        background: {
            main: '#5B5B5B'
        },
        primary: {
            main: '#898989'
        },
        secondary: {
            main: '#131313'
        },
        icons: {
            main: '#FFFFFF'
        }
    },
    typography: {
        color: '#FFFFFF'
    }
});