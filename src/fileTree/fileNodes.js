import * as projects from "../backendAPI/projectResource";

import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

let idCounter = 0;
let tree = (<TreeView></TreeView>);

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
    let path = fileList.shift();
    let isFolder = path.charAt(path.length - 1) === '/';
    if (isFolder)
        path = path.slice(0, path.length - 1);
    let node = new Node(path.split("/").pop(), path, isFolder)
    if (isFolder)
        while (fileList.length !== 0 && fileList[0].startsWith(path + "/"))
            node.children.push(buildTree(fileList));
    return node;
}

function renderTree(nodes) {
    return (<TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
        { renderTree(nodes) }
    </TreeItem>);
}

async function updateTree() {
    let response = await projects.loadProject('taste/tests');
    response = await projects.getFileTree(response['data']['id']);
    if (!response['success'])
        return false;

    console.log(response['data']);
    idCounter = 0;
    let fileList = response['data'].split("\n");
    fileList.pop();
    tree = (<TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
        {renderTree([buildTree(fileList)])}
    </TreeView>);
    return true;
}

export {
    updateTree,
    tree
}