import {AppBar, Toolbar, IconButton, Typography, Stack, Slider, Switch} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import TextFieldsRoundedIcon from '@mui/icons-material/TextFieldsRounded';
import './Header.css';

export const Header = (isDarkTheme, changeTheme, changeFontSize, handleDragStop) => {
    return (
        <AppBar position='static' className='header'>
              <Toolbar>
                <Stack direction='row' spacing={65}>
                    <Stack direction='row' spacing={1}>
                        <Typography variant='h6'>
                            OUI 
                        </Typography>
                        <Typography variant='h6'>
                            IDE
                        </Typography> 
                        <Typography variant='h6'>
                            
                        </Typography>                      
                    </Stack>

                    <Stack direction='row' spacing={0} alignItems="center">
                        <TextFieldsRoundedIcon fontSize='small'/>
                        <Slider size='small' defaultValue={50} aria-label="Letters Size" valueLabelDisplay='auto' color='icons'
                        onChange={ changeFontSize } onChangeCommitted={ handleDragStop } sx={{ width: 500 }}/>
                        <TextFieldsRoundedIcon fontSize='large'/>
                    </Stack>

                    <Stack direction='row' spacing={3}>
                        <Switch checked={isDarkTheme} onChange={changeTheme} color='icons'/>
                        <IconButton>
                            <SettingsIcon color='icons'/>
                        </IconButton>
                    </Stack>
                    </Stack>
              </Toolbar>
          </AppBar>
    );
}