import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Box } from "@mui/system";
import { fontSize } from "./App";
import Overlay from "react-overlay-component";
import { projectFeatures, gitFeatures, mvnFeatures, anyFeatures } from "./Features";
import Editor from "@monaco-editor/react";
import FileTree from "./FileTree";

function Body(isOverlayOpen, setOverlay, opentab, inputFile, isDarkTheme, userCode, setUserCode, tree, setTree) {

    const options = {
        fontSize: fontSize * 2
    };

    return (
        <AppBar position="static" className="body" sx={[{ height: 633 }, {p: 2}]}>
            <Stack direction='row' spacing={1} color='background'>
                <Toolbar>
                    <Stack direction='column' spacing={8}>
                        <IconButton onClick={() => setOverlay[0](true)}>
                            <InsertDriveFileIcon color='icons' fontSize='large'/>
                            <Overlay configs={{ animate: true }} isOpen={isOverlayOpen[0]} closeOverlay={() => setOverlay[0](false)}>
                                {projectFeatures(setTree, setUserCode)}
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
                <Stack direction='column' spacing={1} sx={[{ width: '20%' }]}>
                    <Box sx={[{ borderColor: 'icons' }, { borderRadius: '32px' }, { border: 2}, { width: '75%'}, { p: 2 }]} bgcolor='secondary.main'>
                        <Typography variant="h5">Explorer</Typography>
                    </Box>
                    <Box sx={[{ borderColor: 'icons' }, { borderRadius: '32px' }, { border: 2}, { width: '75%'}, { p: 2 }, { height: 492 }]} bgcolor='background.main'>
                        <Typography variant="h5">FILES</Typography>
                        <Box>{FileTree(tree, setUserCode)}</Box>
                    </Box>
                </Stack>
                
                <Box sx={[{ borderColor: 'icons' }, { borderRadius: '32px' }, { border: 2}, { width: '70%'}, { p: 2 }, { lp: 4 }, { height: 565 }, { overflow: 'hidden' }, { background: isDarkTheme ? "#1E1E1E" : "#FFFFFE" }]}>
                    <Editor
                        options={options}
                        height="calc(100vh - 50px)"
                        width="100%"
                        theme={isDarkTheme ? "vs-dark" : "light"}
                        language="java"
                        defaultLanguage="java"
                        value={userCode}
                        onChange={(value) => { setUserCode(value) }}
                    />
                </Box>
            </Stack>
        </AppBar>
    );
}

export default Body