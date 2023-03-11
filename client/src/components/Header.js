import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { ThemeProvider } from "@mui/system";
import { createTheme, Dialog, List, ListItem, ListItemText } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from "mui-image";
import logo from "../assets/logo.png"
import businessLogo from '../assets/logo_business.png'
import AccountMenu from "./AccountMenu";

import { useState } from "react";



export default function Header({ forHr }) {
    const user = useSelector((state) => state.user)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const theme = createTheme({
        palette: {
            deepblue: {
                main: '#0a4499',
                contrastText: '#fff'
            },
            darklord: {
                main: '#2B332C',
                contrastText: 'white'
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
            <Typography onClick={() => {navigateTo("/createcv")}} variant="a" component="a" sx={{ mx: 4, fontWeight: 500, cursor: "pointer" }}>
                Tạo CV
            </Typography>

            <Typography onClick={() => {navigateTo("/updateprofile")}} variant="a" component="a" sx={{ mx: 4, fontWeight: 500, cursor: "pointer", flexGrow: 1 }}>
                Chỉnh sửa hồ sơ
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
                <Button
                    variant="outlined"
                    sx={{
                        m: 2
                    }}
                    color="inherit"
                    onClick={() => {
                        navigateTo('/hrlogin')
                    }}
                >Đăng tuyển & tìm hồ sơ</Button>
            </>}

            {user.isLogin && <AccountMenu user={user.user} />}
        </>
    </Toolbar>
    // dont open
    const hrToolBar = <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image
            onClick={() => {
                navigateTo("/hrhub")
            }}
            src={businessLogo}
            width="120px"
            height="60px"
            fit="cover"
            duration="0"
            sx={{ margin: "0px", padding: "0px" }}
        />

        <Box>
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
                <Button
                    variant="outlined"
                    sx={{
                        m: 2
                    }}
                    color="inherit"
                    onClick={() => {
                        navigateTo('/hrlogin')
                    }}
                >Đăng tuyển & tìm hồ sơ</Button>
            </>}

            {user.isLogin && <AccountMenu user={user.user} />}
        </Box>
    </Toolbar>
    const navigateTo = function (location) {
        navigate(location)
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 2 }}>
                    <AppBar position="sticky" color={user.user.role == 'rec' ? "darklord" : "deepblue"}>
                        {user.user.role == 'rec' ? hrToolBar : defaultToolBar}
                    </AppBar>
                </Box>
            </ThemeProvider>
        </>
    )
}