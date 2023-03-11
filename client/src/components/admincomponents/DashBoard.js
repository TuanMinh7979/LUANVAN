import { Box, Grid, MenuItem, MenuList, ListItemIcon, ListItemText, Paper } from '@mui/material/'
import { styled, alpha, createTheme } from "@mui/material/styles";
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import JobMn from './JobMn';
import CandidateMn from './CandidateMn';
import DraftsIcon from '@mui/icons-material/Drafts';
import RecMn from './RecMn';
import CvMn from './CvMn';
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
                    onClick={() => navigate("./cvmn")}
                >
                    <ListItemIcon sx={{ py: 2 }}>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText>Quản lý CV</ListItemText>
                </CustomMenuItem>
                <CustomMenuItem
                    // sx={{
                    //     color: activeItem == 0 ? theme.palette.success.main : "",
                    // }}
                    onClick={() => navigate("./recmn")}
                >
                    <ListItemIcon sx={{ py: 2 }}>
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText>Quản lý Nhà tuyển dụng</ListItemText>
                </CustomMenuItem>
                <CustomMenuItem
                    // sx={{
                    //     color: activeItem == 0 ? theme.palette.success.main : "",
                    // }}
                    onClick={() => navigate("./candidatemn")}
                >
                    <ListItemIcon sx={{ py: 2 }}>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>Quản lý Ứng viên</ListItemText>
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
                    <Route path='/recmn' element={<RecMn />}></Route>
                    <Route path='/cvmn' element={<CvMn />}></Route>
                </Routes>
            </Grid>
        </Grid>
    )
}



