import axios from 'axios'

async function createProject(projectPath, projectName) {
    let response = axios.post("http://localhost:8080/project",
        {
            projectName: projectName,
            path: projectPath
        })
        .then((res) => {
            console.log("Created project successfully");
            return { success: true, data: res.data };
        })
        .catch((err) => {
            console.log("Create Project - Failed successfully with error:", err.response.status)
            return { success: false, data: err.response };
        });
    return await response;
}

async function loadProject(projectPath) {
    let response = axios.get("http://localhost:8080/project/load/" + projectPath.replace("/", "%2F"))
        .then((res) => {
            console.log("Loaded project successfully");
            return { success: true, data: res.data };
        })
        .catch((err) => {
            console.log("Load Project - Failed successfully with error:", err.response.status)
            return { success: false, data: err.response };
        });
    return await response;
}

async function getFileTree(projectId) {
    let response = axios.get("http://localhost:8080/project/" + projectId)
        .then((res) => {
            console.log("Fetched project files successfully");
            return { success: true, data: res.data };
        })
        .catch((err) => {
            console.log("Fetch files - Failed successfully with error:", err.response.status)
            return { success: false, data: err.response };
        });
    return await response;
}

export {
    createProject,
    loadProject,
    getFileTree
}