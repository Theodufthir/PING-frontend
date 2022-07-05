import {Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

function InboxIcon() {
    return null;
}

function MailIcon() {
    return null;
}

function Body() {
    return (
        <div className="body">
            <Drawer variant="permanent">
                <list>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </list>
            </Drawer>
        </div>
    );
}

export default Body