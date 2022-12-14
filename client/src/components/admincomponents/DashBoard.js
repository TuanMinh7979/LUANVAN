import { Box,  Grid, MenuItem, MenuList, ListItemIcon, ListItemText, Paper } from '@mui/material/'
import { styled, alpha, createTheme } from "@mui/material/styles";

function SideBar() {
    const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
        "&:hover": {
            color: theme.palette.success.light,
            "& .MuiListItemIcon-root": {
                color: theme.palette.success.light,
            },
        },
    }));
    return (
        <Box
            sx={{
                width: "100%"
            }}
            component={Paper}
        >
            <MenuList>
                <CustomMenuItem
                    // sx={{
                    //     color: activeItem == 0 ? theme.palette.success.main : "",
                    // }}

                >
                    {/* <ListItemIcon sx={{ py: 2 }}>
                        <EditIcon
                            fontSize="small"
                            sx={{
                                color: activeItem == 0 ? theme.palette.success.main : "",
                            }}
                        />
                    </ListItemIcon> */}
                    <ListItemText>Đăng tin tuyển dụng mới</ListItemText>
                </CustomMenuItem>
            </MenuList>
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
                    <SideBar />
            </Grid>
        </Grid>
    )
}



