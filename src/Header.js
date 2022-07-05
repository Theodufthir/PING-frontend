import {AppBar, Toolbar, IconButton, Typography, Stack, Slider, Switch} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import TextFieldsRoundedIcon from '@mui/icons-material/TextFieldsRounded';
import './Header.css';

export const Header = (isDarkTheme, changeTheme) => {
    return (
        <AppBar position='static' className='header'>
              <Toolbar>
                  <Typography variant='h6' component='div'>
                      OUI IDE
                  </Typography>
                  <TextFieldsRoundedIcon fontSize='small' />
                  <Slider size='small' defaultValue={50} aria-label="Letters Size" valueLabelDisplay='auto' color='icons'/>
                  <TextFieldsRoundedIcon fontSize='medium'/>
                  <Stack direction='row' spacing={3}>
                      <Switch checked={isDarkTheme} onChange={changeTheme} color='icons'/>
                      <IconButton>
                          <SettingsIcon color='icons'/>
                      </IconButton>
                  </Stack>
              </Toolbar>
          </AppBar>
    );
}