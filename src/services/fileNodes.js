let idCounter = 0;

class Node {
    id = 0;
    children = [];
    path = "";
    name = "";
    isFolder = false;

    constructor(name, path, isFolder) {
        this.name = name;
        this.path = path;
        this.isFolder = isFolder;
        this.id = idCounter++;
    }
}

function buildTree(fileList) {
    idCounter = 0;
    return buildRec(fileList);
}

function buildRec(fileList) {
    let path = fileList.shift();
    let isFolder = path.charAt(path.length - 1) === '/';
    if (isFolder)
        path = path.slice(0, path.length - 1);
    let node = new Node(path.split("/").pop(), path, isFolder)
    if (isFolder)
        while (fileList.length !== 0 && fileList[0].startsWith(path + "/"))
            node.children.push(buildRec(fileList));
    return node;
}

export {
    buildTree,
    Node
}