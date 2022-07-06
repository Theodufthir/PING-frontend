import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {loadFile} from "./services/fileServices";

function renderTree(node, setUserCode) {
    return (<TreeItem key={node.id} nodeId={node.id} label={node.name} path={node.path} onClick={() => {
        if (!node.isFolder)
            loadFile(node.path, setUserCode)
    }}>
        { node.isFolder ? node.children.map((child) => renderTree(child, setUserCode)) : null }
    </TreeItem>);
}

function FileTree(root, setUserCode) {
    return (<TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: "100%", flexGrow: 1, maxWidth: "100%", overflowY: 'false' }}
    >
        { renderTree(root, setUserCode) }
    </TreeView>);
}

export default FileTree