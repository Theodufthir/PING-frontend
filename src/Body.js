import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Box } from "@mui/system";
import { TextField } from '@mui/material';
import { fontSize } from "./App";
import Overlay from "react-overlay-component";
import { updateTree, tree } from "./fileTree/fileNodes";
import { projectFeatures, gitFeatures, mvnFeatures, anyFeatures } from "./Features";

function Body(isOverlayOpen, setOverlay, opentab, inputFile) {
    return (
        <AppBar position="static" className="body" sx={[{ height: 810 }, {p: 2}]}>
            <Stack direction='row' spacing={1} color='background'>
                <Toolbar>
                    <Stack direction='column' spacing={8}>
                        <IconButton onClick={() => setOverlay[0](true)}>
                            <InsertDriveFileIcon color='icons' fontSize='large'/>
                            <Overlay configs={{ animate: true }} isOpen={isOverlayOpen[0]} closeOverlay={() => setOverlay[0](false)}>
                                {projectFeatures()}
                            </Overlay>
                        </IconButton>
                        <IconButton onClick={() => setOverlay[1](true)}>
                            <PlayArrowIcon color='icons' fontSize='large'/>
                            <Overlay configs={{ animate: true }} isOpen={isOverlayOpen[1]} closeOverlay={() => setOverlay[1](false)}>
                                {mvnFeatures()}
                            </Overlay>
                        </IconButton>
                        <IconButton onClick={() => setOverlay[2](true)}>
                            <ElderlyWomanIcon color='icons' fontSize='large'/>
                            <Overlay configs={{ animate: true }} isOpen={isOverlayOpen[2]} closeOverlay={() => setOverlay[2](false)}>
                                {gitFeatures()}
                            </Overlay>
                        </IconButton>
                        <IconButton onClick={() => setOverlay[3](true)}>
                            <SentimentVerySatisfiedIcon color="icons" fontSize='large'/>
                            <Overlay configs={{ animate: true }} isOpen={isOverlayOpen[3]} closeOverlay={() => setOverlay[3](false)}>
                                {anyFeatures()}
                            </Overlay>
                        </IconButton>
                    </Stack>
                </Toolbar>
                <Stack direction='column' spacing={1} sx={{ width: '15%' }}>
                    <Box sx={[{ borderColor: 'icons' }, { borderRadius: '32px' }, { border: 1}, { width: '75%'}, { p: 2 }]} bgcolor='secondary.main'>
                        <Typography variant="h5">Explorer</Typography>
                    </Box>
                    <Box sx={[{ borderColor: 'icons' }, { borderRadius: '32px' }, { border: 1}, { width: '75%'}, { p: 2 }, { height: 625 }]} bgcolor='background.main'>
                        <Typography variant="h5">FILES</Typography>
                        <Box>{tree}</Box>
                    </Box>
                </Stack>
                
                <Box sx={[{ borderColor: 'icons' }, { borderRadius: '32px' }, { border: 1}, { width: '80%'}, { p: 2 }, { lp: 4 }, { height: 700 }]}>
                    <Typography variant="h5">file</Typography>
                    <TextField id='texteditor' inputProps={{style: {fontSize: fontSize}}} 
                    InputLabelProps={{style: {fontSize: fontSize}}} 
                    variant="outlined" multiline rows={16}
                    fullWidth='true' margin='dense'/>
                </Box>
            </Stack>
        </AppBar>
    );
}

export default Body