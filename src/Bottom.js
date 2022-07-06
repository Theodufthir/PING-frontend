import {AppBar, Toolbar, Stack, Typography} from "@mui/material";

export const Bottom = () => {
    return (
        <AppBar position="static" className="bottom" sx={{ height: '10%' }}>
            <Toolbar>
                <Stack direction='row' spacing={144}>
                    <Stack direction='row' spacing={3} alignItems="center">
                        <Typography variant='body2'>
                            Made by
                        </Typography>
                        <Typography variant='h6'>
                            OUI & Co
                        </Typography>
                    </Stack>
                    <Typography>
                        Copyrights | Licence
                    </Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}