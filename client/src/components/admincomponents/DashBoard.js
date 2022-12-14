import { Box, Grid, MenuItem, MenuList, ListItemIcon, ListItemText, Paper } from '@mui/material/'
import { styled, alpha, createTheme } from "@mui/material/styles";
import ArticleIcon from '@mui/icons-material/Article';
import { Route, Routes, useNavigate } from 'react-router-dom';
import JobMn from './JobMn';
import CandidateMn from './CandidateMn';
function SideBar() {
    const navigate = useNavigate()
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
                width: "100%",
                minHeight: "1000px"
            }}
            component={Paper}
        >
            <MenuList>
                <CustomMenuItem
                    // sx={{
                    //     color: activeItem == 0 ? theme.palette.success.main : "",
                    // }}

                    onClick={() => navigate("./")}

                >
                    <ListItemIcon sx={{ py: 2 }}>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText>Quản lý tin tuyển dụng</ListItemText>
                </CustomMenuItem>
                <CustomMenuItem
                    // sx={{
                    //     color: activeItem == 0 ? theme.palette.success.main : "",
                    // }}
                    onClick={() => navigate("./candidatemn")}
                >
                    <ListItemIcon sx={{ py: 2 }}>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText>Quản lý Ứng viên</ListItemText>
                </CustomMenuItem>
                <CustomMenuItem
                // sx={{
                //     color: activeItem == 0 ? theme.palette.success.main : "",
                // }}

                >
                    <ListItemIcon sx={{ py: 2 }}>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText>Quản lý Nhà tuyển dụng</ListItemText>
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
                background: "#f1f2f7",
                gap: 3
            }}
        >
            <Grid
                item
                container
                xs={2}>
                <SideBar />
            </Grid>
            <Grid
                item
                xs={9}
                sx={{
                    mt: 4,
                }}
            >
                <Routes>
                    <Route path='/' element={<JobMn />}></Route>
                    <Route path='/candidatemn' element={<CandidateMn />}></Route>
                </Routes>
            </Grid>
        </Grid>
    )
}



