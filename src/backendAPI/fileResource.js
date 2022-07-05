import axios from 'axios'

async function updateFile(projectId, filePath, from, to, content) {
    let response = axios.patch("http://localhost:8080/project/" + projectId + "/" + filePath.replaceAll("/","%2F"),
        {
            path: filePath,
            from: from,
            to: to,
            content: content
        })
        .then((res) => {
            console.log("Updated file content successfully");
            return { success: true };
        })
        .catch((err) => {
            console.log("Update File Content - Failed successfully with error:", err.response.status)
            return { success: false };
        });
    return await response;
}

async function moveFile(projectId, oldPath, newPath) {
    let response = axios.patch("http://localhost:8080/project/" + projectId + "/" + oldPath.replaceAll("/","%2F"),
        {
            path: newPath,
            from: "0",
            to: "0",
            content: ""
        })
        .then((res) => {
            console.log("Moved file successfully");
            return { success: true };
        })
        .catch((err) => {
            console.log("Move File - Failed successfully with error:", err.response.status)
            return { success: false };
        });
    return await response;
}

async function deleteFile(projectId, filePath) {
    let response = axios.delete("http://localhost:8080/project/" + projectId + "/" + filePath.replaceAll("/","%2F"))
        .then((res) => {
            console.log("Deleted file successfully");
            return { success: true };
        })
        .catch((err) => {
            console.log("Delete File - Failed successfully with error:", err.response.status)
            return { success: false };
        });
    return await response;
}

async function createFile(projectId, filePath) {
    let response = axios.put("http://localhost:8080/project/" + projectId + "/" + filePath.replaceAll("/","%2F"))
        .then((res) => {
            console.log("Created file successfully");
            return { success: true };
        })
        .catch((err) => {
            console.log("Create File - Failed successfully with error:", err.response.status)
            return { success: false };
        });
    return await response;
}

async function getFileContent(projectId, filePath) {
    let response = axios.get("http://localhost:8080/project/" + projectId + "/" + filePath.replaceAll("/","%2F"))
        .then((res) => {
            console.log("Fetched file content successfully");
            return { success: true, data: res.data };
        })
        .catch((err) => {
            console.log("Get File Content - Failed successfully with error:", err.response.status)
            return { success: false, data: err.response };
        });
    return await response;
}

async function getFileMetadata(projectId, filePath) {
    let response = axios.head("http://localhost:8080/project/" + projectId + "/" + filePath.replaceAll("/","%2F"))
        .then((res) => {
            console.log("Fetched file metadata successfully");
            return { success: true, data: res.data };
        })
        .catch((err) => {
            console.log("Get File Metadata - Failed successfully with error:", err.response.status)
            return { success: false, data: err.response };
        });
    return await response;
}

export {
    getFileMetadata,
    getFileContent,
    createFile,
    deleteFile,
    moveFile,
    updateFile
}