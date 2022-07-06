import { Button, Input, Stack, TextField } from "@mui/material";
import { createProject, loadProject } from "./services/projectServices";

function projectFeatures(setTree, setUserCode) {
    return (
        <Stack direction='column' spacing={2}>
            <Stack direction='row' spacing={1}>
                <TextField id="filename" placeholder="filepath"/>
                <Button onClick={() => console.log(document.getElementById("filename").value)} variant="contained">Create file</Button>
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField id="project" placeholder="Project Name"/>
                <Button onClick={() => createProject("", document.getElementById("project").value)} variant="contained">Create project</Button>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField id="folder" placeholder="folderpath" margin="small"/>
                <Button onClick={() => { setUserCode("test"); loadProject(document.getElementById("folder").value, setTree)}} variant="contained">Open project</Button>
            </Stack>
        </Stack>

    );
}

function mvnFeatures() {
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

function gitFeatures() {
    return (
        <Stack direction='column' spacing={2}>
            {((opentab, inputFile) => {
                return (
                    <Stack direction='row' spacing={2}>
                        <Input ref={inputFile} type="file" webkitdirectory='true' directory id="filetoadd" />
                        <Button variant="contained" onClick={ () => console.log(document.getElementById("filetoadd").value) }>Add file</Button>
                    </Stack>)
            })()}
            <Stack direction='row' spacing={2}>
                <TextField id="commit" placeholder="commit message" margin="small"/>
                <Button onClick={() => console.log(document.getElementById("commit").value)} variant="contained">Commit changes</Button>
            </Stack>
            <Button onClick={() => console.log("pushing")} variant="contained">Push</Button>
            <Button onClick={() => console.log("pulling")} variant="contained">Pull</Button>
        </Stack>
    )
}

function anyFeatures() {
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

export {
    projectFeatures,
    anyFeatures,
    mvnFeatures,
    gitFeatures
}