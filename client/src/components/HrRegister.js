import axios from "axios";
import { useRef, useState } from "react";
import {
    Grid,
    Box,
    Typography,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    Button,
    Link,
    Alert
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import Image from "mui-image";
import logo from "../assets/logo_business_white.png";
import banner from '../assets/banner_business.png'
import env from '../assets/env.json'
export default function HrRegister() {
    const [response, setResponse] = useState(false);
    const imageLink = env.SAMPLE_IMAGE_01;
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const retypepassword = useRef();

    const validate = () => {
        if (
            username.current.value == "" ||
			password.current.value == "" ||
			email.current.value == "" ||
			password.current.value == "" ||
			retypepassword.current.value == ""
        ) {
            setResponse({
                showArlert: true,
                message: env.NOTNULL_MESSAGE
            });
            return false;
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.current.value)) {
            setResponse({
                showArlert: true,
                message: env.WRONG_EMAIL
            });
            return false;
        } else if (retypepassword.current.value !== password.current.value) {
            setResponse({
                showArlert: true,
                message: env.PASSWORD_NOT_MATCH
            });
            return false;
        }
        return true;
    };

    const Signup = () => {
        if (validate()) {
            const data = {
                usernameInp: username.current.value,
                passwordInp: password.current.value,
                email: email.current.value,
                name: "",
                address: "",
                avatar: "",
                roleInp: "rec",
               
                phone: ""
            };
            axios({
                method: "post",
                url: env.AUTH + "register",
                data: data
            }).then((res) => {
                console.log(res.data);
                
            });
        }
    };
    return (
        <>
            <Grid
                container
                sx={{
                    minHeight: "700px",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {/* Signup control */}
                <Grid xs={4}>
                    <Box
                        sx={{
                            width: "75%",
                            mx: "auto",
                            pb: 3,
                            borderBottom: "1px solid #00000014"
                        }}
                    >
                        <Box>
                            <Image
                                sx={{
                                    maxWidth: "140px",
                                    maxHeight: "140px"
                                }}
                                src={logo}
                                fit="cover"
                                duration={0}
                            />
                        </Box>
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: "450"
                                }}
                            >
								Chào mừng bạn đến với ViecLamNhanh,
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    color: "#000000b0",
                                    fontSize: "16px"
                                }}
                            >
								Tìm kiếm ứng viên nhanh hơn với <Typography variant="p" sx={{color: '#009623', fontWeight: 'bold'}}>thuật toán tối ưu</Typography>  của chúng tôi
                            </Typography>
                        </Box>
                        {response.showArlert && (
                            <Alert severity="error" sx={{ p: 0, mb: 4 }}>
                                {response.message}
                            </Alert>
                        )}
                        <form>
                            <Box sx={{ mb: 3 }}>
                                <InputLabel
                                    color="success"
                                    variant=""
                                    sx={{ fontSize: "13px", mb: 1 }}
                                >
									Username
                                </InputLabel>
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
                                            <AccountCircleIcon color="success" />
                                        </InputAdornment>
                                    }
                                />
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <InputLabel
                                    color="success"
                                    variant=""
                                    sx={{ fontSize: "13px", mb: 1 }}
                                >
									Email
                                </InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    inputRef={email}
                                    onFocus={() => setResponse(false)}
                                    name="email"
                                    type="email "
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
                                <InputLabel
                                    color="success"
                                    variant=""
                                    sx={{ fontSize: "13px", mb: 1 }}
                                >
									Mật khẩu
                                </InputLabel>
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
                            <Box sx={{ mb: 3 }}>
                                <InputLabel
                                    color="success"
                                    variant=""
                                    sx={{ fontSize: "13px", mb: 1 }}
                                >
									Nhập lại Mật khẩu
                                </InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    inputRef={retypepassword}
                                    onFocus={() => setResponse(false)}
                                    name="retypepassword"
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
                                <Button
                                    onClick={Signup}
                                    variant="contained"
                                    color="success"
                                    fullWidth
                                >
									Đăng ký
                                </Button>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="p">
									Bạn đã có tài khoản{" "}
                                    <Link
                                        href="/hrlogin"
                                        underline="none"
                                        sx={{ color: "#4caf50", fontWeight: "650" }}
                                    >
										Đăng nhập
                                    </Link>
                                </Typography>
                            </Box>
                        </form>
                    </Box>
                </Grid>
                {/* images */}
                <Grid
                    xs={6}
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <Box
                        sx={{
                            width: "80%",
                            mx: "auto"
                        }}
                    >
                        <Box>
                            <Image
                                sx={{
                                    maxWidth: "80%",
                                    minHeight: "80%"
                                }}
                                src={banner}
                                fit="cover"
                                duration={0}
                            ></Image>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 3,
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <Typography variant="h5" fontWeight={500}>
								Công cụ viết CV miễn phí
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{ width: "70%", textAlign: "center" }}
                            >
								Nhiều mẫu CV đẹp, phù hợp nhu cầu ứng tuyển các vị trí khác
								nhau. Dễ dàng chỉnh sửa thông tin, tạo CV online nhanh chóng
								trong vòng 5 phút.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
