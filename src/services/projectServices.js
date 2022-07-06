import { loadProjectRequest, createProjectRequest, getFilesListRequest } from "../backendAPI/projectResource";
import { buildTree } from "./fileNodes";
import { updateProjectId } from "./fileServices";

let currProjectId = -1;

function loadProject(path, setTree) {
    loadProjectRequest(path).then((res) => {
        if (!res['success'])
            return res;
        currProjectId = res['data']['id'];
        updateProjectId(currProjectId);
        return getFilesListRequest(currProjectId);
    }).then((res) => {
        if (!res['success'])
            return;
        let fileList = res['data'].split('\n');
        if (fileList.length > 0)
            fileList.pop();
        setTree(buildTree(fileList));
    });
}

function createProject(path, name) {
    createProjectRequest(path, name).then((res) => {
        if (!res['success'])
            return res;
        currProjectId = res['data']['id'];
    });
}

export {
    loadProject,
    createProject
}
