class Node {
    children = [];
    path = "";
    name = "";
    isFolder = false;

    constructor(name, path, isFolder) {
        this.name = name;
        this.path = path;
        this.isFolder = isFolder;
    }
}

function listToNodes(fileList) {
    let path = fileList.shift();
    let isFolder = path.charAt(path.length - 1) === '/';
    if (isFolder)
        path = path.slice(0, path.length - 1);
    let node = new Node(path.split("/").pop(), path, isFolder)
    if (isFolder)
        while (fileList.length !== 0 && fileList[0].startsWith(path + "/"))
            node.children.push(listToNodes(fileList));
    return node;
}

export {
    Node,
    listToNodes
}