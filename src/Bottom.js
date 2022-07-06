import {AppBar, Toolbar, Stack, Typography, Link} from "@mui/material";

const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

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
                    <Link href={ url } underline="none" target="_blank" color="text.primary">
                        {"Copyrights | Licence"}
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}