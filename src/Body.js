import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box } from "@mui/system";
import { TextField } from '@mui/material';
import { fontSize } from "./App";


function Body() {
    return (
        <AppBar position="static" className="body" sx={[{ height: 807 }, {p: 2}]}>
            <Stack direction='row' spacing={1} color='background'>
                <Toolbar>
                    <Stack direction='column' spacing={8}>
                        <IconButton>
                            <InsertDriveFileIcon color='icons' fontSize='large'/>
                        </IconButton>
                        <IconButton>
                            <PlayArrowIcon color='icons' fontSize='large'/>
                        </IconButton>
                        <IconButton>
                            <ElderlyWomanIcon color='icons' fontSize='large'/>
                        </IconButton>
                        <IconButton onClick={() => console.log(fontSize)}>
                            <SettingsIcon color="icons" fontSize='large'/>
                        </IconButton>
                    </Stack>
                </Toolbar>
                
                <Box sx={[{ borderColor: 'secondary.main' }, { borderRadius: '16px' }, { border: 1}, { width: '15%'}, { p: 2 }, { height: 700 }]}>
                    <Typography variant="h5">Explorer</Typography>
                </Box>
                <Box sx={[{ borderColor: 'secondary.main' }, { borderRadius: '16px' }, { border: 1}, { width: '70%'}, { p: 2 }, { height: 700 }]}>
                    <Typography variant="h5">file</Typography>
                    <TextField id='texteditor' inputProps={{style: {fontSize: fontSize}, step: 3000}} 
                    InputLabelProps={{style: {fontSize: fontSize}}} 
                    variant="outlined" multiline rows={16}
                    fullWidth='true' margin='dense'/>
                </Box>
            </Stack>
        </AppBar>
    );
}

export default Body