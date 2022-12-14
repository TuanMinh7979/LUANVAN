import { Box, Grid, MenuItem } from '@mui/material/'
import { styled } from '@mui/system';
const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
        color: theme.palette.success.light,
        "& .MuiListItemIcon-root": {
            color: theme.palette.success.light,
        },
    },
}));
function SideBar() {
    return (
        <Box
            sx={{
                width: "100%"
            }}
        >

        </Box>
    )
}
export default function DashBoard() {
    return (
        <Grid
            container
            spacing={0}
            sx={{
                background: "#f1f2f7"
            }}
        >
            <Grid
                item
                container
                xs={4}>
            </Grid>
        </Grid>
    )
}