import {getFileContent} from "../backendAPI/fileResource";


let currProjectId = -1;

function updateProjectId(id) {
    currProjectId = id;
}

function loadFile(path, setUserCode) {
    getFileContent(currProjectId, path).then((res) => {
        if (!res['success'])
            return res;
        setUserCode(res['data']);
    });
}

export {
    updateProjectId,
    loadFile
}