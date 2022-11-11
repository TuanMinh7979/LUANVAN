import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from "mui-image";
import logo from "../assets/logo.png"
import AccountMenu from "./AccountMenu";
export default function Header({ forHr }) {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const theme = createTheme({
        palette: {
            deepblue: {
                main: '#0a4499',
                contrastText: '#fff'
            }
        }
    })
    // default toolbar, dont open it !!!
    const defaultToolBar = <Toolbar>
        <Image
            onClick={() => {
                navigateTo("/")
            }}
            src={logo}
            width="120px"
            height="60px"
            fit="cover"
            duration="0"
            sx={{ margin: "0px", padding: "0px" }}
        />
        <>
            <Typography onClick={() => {
                navigateTo("/jobs")
            }} variant="a" component="a" sx={{ mx: 4, fontWeight: 500, cursor: "pointer" }}>
                Việc làm
            </Typography>
            <Typography variant="a" component="a" sx={{ mx: 4, fontWeight: 500, cursor: "pointer" }}>
                Hồ sơ & CV
            </Typography>
            <Typography variant="a" component="a" sx={{ mx: 4, fontWeight: 500, cursor: "pointer", flexGrow: 1 }}>
                Công cụ
            </Typography>
        </>
        <>
            {!user.isLogin && <>
                <Button sx={{
                    m: 2
                }} color="inherit" onClick={() => {
                    navigateTo("/login")
                }}>
                    Đăng nhập
                </Button>
                <Button sx={{
                    m: 2
                }} color="inherit" onClick={() => {
                    navigateTo("/register")
                }}>
                    Đăng ký
                </Button>
                <Button variant="outlined" sx={{
                    m: 2
                }} color="inherit">Đăng tuyển & tìm hồ sơ</Button>
            </>}

            {user.isLogin && <AccountMenu user={user.user} />}
        </>
    </Toolbar>
    const navigateTo = function (location) {
        navigate(location)
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 2 }}>
                    <AppBar position="sticky" color="deepblue">
                        {defaultToolBar}
                    </AppBar>
                </Box>
            </ThemeProvider>
        </>
    )
}