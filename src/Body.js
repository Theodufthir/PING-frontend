import { AppBar, IconButton, Stack, Toolbar, Typography, Button, Input } from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Box } from "@mui/system";
import { TextField } from '@mui/material';
import { fontSize } from "./App";
import Overlay from "react-overlay-component";


function Body(isOverlayOpen, setOverlay, opentab, inputFile) {
    return (
        <AppBar position="static" className="body" sx={[{ height: 810 }, {p: 2}]}>
            <Stack direction='row' spacing={1} color='background'>
                <Toolbar>
                    <Stack direction='column' spacing={8}>
                        <IconButton onClick={() => setOverlay[0](true)}>
                            <InsertDriveFileIcon color='icons' fontSize='large'/>
                            <Overlay configs={{ animate: true }} isOpen={isOverlayOpen[0]} closeOverlay={() => setOverlay[0](false)}>
                                <Stack direction='column' spacing={2}>
                                    {create()}
                                    {createProject()}
                                    <Stack direction='row' spacing={2}>
                                        <TextField id="folder" placeholder="folderpath" margin="small"/>
                                        <Button onClick={() => console.log(document.getElementById("folder").value)} variant="contained">Open project</Button>
                                    </Stack>  
                                </Stack>
                            </Overlay>
                        </IconButton>
                        <IconButton onClick={() => setOverlay[1](true)}>
                            <PlayArrowIcon color='icons' fontSize='large'/>
                            <Overlay configs={{ animate: true }} isOpen={isOverlayOpen[1]} closeOverlay={() => setOverlay[1](false)}>
                                {mvn()}
                            </Overlay>
                        </IconButton>
                        <IconButton onClick={() => setOverlay[2](true)}>
                            <ElderlyWomanIcon color='icons' fontSize='large'/>
                            <Overlay configs={{ animate: true }} isOpen={isOverlayOpen[2]} closeOverlay={() => setOverlay[2](false)}>
                                {git()}
                            </Overlay>
                        </IconButton>
                        <IconButton onClick={() => setOverlay[3](true)}>
                            <SentimentVerySatisfiedIcon color="icons" fontSize='large'/>
                            <Overlay configs={{ animate: true }} isOpen={isOverlayOpen[3]} closeOverlay={() => setOverlay[3](false)}>
                                {any()}
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

function create() {
    return (
    <Stack direction='row' spacing={1}>
        <TextField id="filename" placeholder="filepath"/>
        <Button onClick={() => console.log(document.getElementById("filename").value)} variant="contained">Create file</Button>
    </Stack>
    );
}

function createProject() {
    return (
        <Stack direction='row' spacing={1}>
            <TextField id="project" placeholder="Project Name"/>
            <Button onClick={() => console.log(document.getElementById("project").value)} variant="contained">Create project</Button>
        </Stack>
        );
}


function addFile(opentab, inputFile) {
    return (
        <Stack direction='row' spacing={2}>
            <Input ref={inputFile} type="file" webkitdirectory='true' directory id="filetoadd" />
            <Button variant="contained" onClick={ () => console.log(document.getElementById("filetoadd").value) }>Add file</Button>
        </Stack>
    )
}

function mvn() {
    return (
        <Stack direction='column' spacing={2}>
            <Button onClick={() => console.log("compiling")} variant="contained">Compile</Button>
            <Button onClick={() => console.log("cleaning")} variant="contained">Clean</Button>
            <Button onClick={() => console.log("testing")} variant="contained">Test</Button>
            <Button onClick={() => console.log("packaging")} variant="contained">Package</Button>
            <Stack direction='row' spacing={2}>
                <TextField id="install" placeholder="optional parameters" margin="small"/>
                <Button onClick={() => console.log(document.getElementById("install").value)} variant="contained">Install</Button>
            </Stack>
            <Button onClick={() => console.log("executing")} variant="contained">Execute</Button>
            <Stack direction='row' spacing={2}>
                <TextField id="tree" placeholder="optional parameters" margin="small"/>
                <Button onClick={() => console.log(document.getElementById("tree").value)} variant="contained">dependency:tree</Button>
            </Stack>                 
        </Stack>
    )
}
function git() {
    return (
        <Stack direction='column' spacing={2}>
            {addFile()}
            <Stack direction='row' spacing={2}>
                <TextField id="commit" placeholder="commit message" margin="small"/>
                <Button onClick={() => console.log(document.getElementById("commit").value)} variant="contained">Commit changes</Button>
            </Stack>
            <Button onClick={() => console.log("pushing")} variant="contained">Push</Button>
            <Button onClick={() => console.log("pulling")} variant="contained">Pull</Button>
        </Stack>
    )
}
function any() {
    return (
        <Stack direction='column' spacing={2}>
            <Button onClick={() => console.log("cleaning up")} variant="contained">Cleanup</Button>
            <Button onClick={() => console.log("compressing")} variant="contained">Compress</Button>
            <Stack direction='row' spacing={2}>
                <TextField id="stringtosearch" placeholder="String to search" margin="small"/>
                <Button onClick={() => console.log(document.getElementById("stringtosearch").value)} variant="contained">Search in project</Button>
            </Stack>                            
        </Stack>
    )
}

export default Body