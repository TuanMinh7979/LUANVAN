import axios from "axios";
import { useRef, useState } from "react";
import { Grid, Box, Typography, InputLabel, InputAdornment, OutlinedInput, Button, Link, Alert } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import Image from "mui-image";
import logo from "../assets/logo_banner.png"
import env from 'react-dotenv'
export default function Login() {
    const [response, setResponse] = useState(false)
    const imageLink = env.SAMPLE_IMAGE_01
    const username = useRef();
    const password = useRef();
    const Signin = () => {
        const data = {
            username: username.current.value,
            password: password.current.value
        }
        axios({
            method: "post",
            url: env.AUTH + "login",
            data: data
        }).then((res) => {
            console.log(res.data)
            if (res.data.status === 404) {
                setResponse({
                    showArlert: true,
                    message: res.data.message
                })
            }
            else {
                window.location.href="./"
            }
        })
    }
    return (
        <>
            <Grid container
                sx={{
                    minHeight: '700px',
                    alignItems: 'center'
                }}>
                {/* Login control */}
                <Grid xs={6}>
                    <Box
                        sx={{
                            width: "75%",
                            mx: "auto"
                        }}
                    >
                        <Box width={100}>
                            <Image
                                sx={{
                                    maxWidth: "300px",
                                    maxHeight: "300px"
                                }}
                                src={logo}
                                fit="cover"
                                duration={0}
                            />
                        </Box>
                        <Box sx={{ width: "80%", marginTop: "5%", mb:4 }}>
                            <Typography variant="h6"
                                sx={{
                                    fontSize: "24px"
                                }}
                            >
                                Chào mừng bạn trở lại,
                            </Typography>
                            <Typography variant="p"
                                sx={{
                                    color: "#000000b0",
                                    fontSize: "16px"
                                }}
                            >
                                Hồ sơ và thông báo tuyển dụng của bạn góp phần làm hệ thống của chúng ta thêm phổ biến, hãy chung tay xây dựng nhé
                            </Typography>
                        </Box>
                        {response.showArlert && <Alert severity="error" sx={{ p:0, mb:4 }}>{response.message}</Alert>}
                        <form >

                            <Box sx={{ mb: 3 }}>
                                <InputLabel color="success" variant="" sx={{ fontSize: "13px" }}>Username</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    inputRef={username}
                                    onFocus={() => setResponse(false)}
                                    name="username"
                                    size="small"
                                    color="success"
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <EmailIcon color="success" />
                                        </InputAdornment>
                                    }
                                />
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <InputLabel color="success" variant="" sx={{ fontSize: "13px" }}>Password</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    inputRef={password}
                                    onFocus={() => setResponse(false)}
                                    name="password"
                                    type="password"
                                    size="small"
                                    color="success"
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <LockIcon color="success" />
                                        </InputAdornment>
                                    }
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Button onClick={Signin} variant="contained" color="success" fullWidth>Đăng nhập</Button>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="p">
                                    Bạn chưa có tài khoản <Link href="/register" underline="none" sx={{ color: "#4caf50", fontWeight: "650" }} >Đăng ký ngay</Link>
                                </Typography>
                                <Typography variant="p">
                                    <Link href="/register" underline="none" sx={{ color: "#4caf50", fontWeight: "650" }} >Quên mật khẩu</Link>
                                </Typography>
                            </Box>
                        </form>
                    </Box>
                </Grid>
                {/* images */}
                <Grid xs={6}>
                    <Box
                        sx={{
                            width: "70%"
                        }}>
                        <Box
                        >
                            <Image
                                sx={{
                                    maxWidth: "70%",
                                    minHeight: "70%"
                                }}
                                src={imageLink}
                                fit="cover"
                                duration={0}>
                            </Image>
                        </Box>
                        <Box
                            sx={{ display: "flex", justifyContent: "center", mt: 3, flexDirection: "column", alignItems: "center" }}
                        >
                            <Typography variant="h5" fontWeight={500}>
                                Công cụ viết CV miễn phí
                            </Typography>
                            <Typography variant="p"
                                sx={{ width: "70%", textAlign: "center" }}
                            >
                                Nhiều mẫu CV đẹp, phù hợp nhu cầu ứng tuyển các vị trí khác nhau. Dễ dàng chỉnh sửa thông tin, tạo CV online nhanh chóng trong vòng 5 phút.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}