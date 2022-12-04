import { Autocomplete, Box, Button, Grid, Table, Paper, TableCell, TableContainer, TableHead, TextField, Typography, TableRow } from "@mui/material";
import { useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import 'draft-js/dist/Draft.css';
import BarChartIcon from '@mui/icons-material/BarChart';
import logoImage from '../assets/camera_icon.png'
import Image from "mui-image";
import { useEffect, useState } from "react";
import RichText from "./RichText";
import axios from 'axios'
import { maxHeight, maxWidth } from "@mui/system";
export default function Charts({ user }) {
    const navigate = useNavigate()



    const [data, setData] = useState({
        name: '',
        type: '',
        location: '',
        members: 0,
        foundingAt: '',
        logo: '',
        address: '',
        // introduce: JSON.stringify(convertToRaw(introduce.getCurrentContent()))

    })
    const [grossType, setGrossType] = useState(false)
    const [currency, setCurrency] = useState()

    const sendPostData = function () {
        axios.post("/jobpost", data)
            .then((res) => {
                console.log(res)
            })
    }
    function navigateTo(location) {
        navigate(location)
    }
    useEffect(() => {
        if (!user.isLogin && user.user.role != "rec") {
            navigateTo('/hrlogin')
        }
    })
    return (<>
        <Grid
            sx={{
                m: 3
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    p: 2,
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: "center",
                    background: "#fff"
                }}
            >
                <BarChartIcon />
                <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
                    Báo cáo tuyển dụng
                </Typography>
            </Box>
            {/* head info */}
            <Grid
                container
                sx={{ p: 2, rowGap: 2, columnGap: 2, background: "#fff", mb: 2, alignItems: 'center' }}
            >
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableCell>Tên tin tuyển dụng</TableCell>
                            <TableCell>Ngày đăng</TableCell>
                            <TableCell>Ngày hết hạn</TableCell>
                            <TableCell>Lượt xem</TableCell>
                            <TableCell>Đã ứng tuyển</TableCell>
                            <TableCell>Trạng thái</TableCell>
                            <TableCell></TableCell>
                        </TableHead>
                        <TableRow>
                            <TableCell
                                onClick={() => {
                                    navigateTo("/jobdetail/6384cbe50fed53e7bcedda8d")
                                }}
                            >Chuyên viên quan hệ khách hàng tại Cần Thơ thu nhập từ 10 triệu</TableCell>
                            <TableCell>20/11/2022</TableCell>
                            <TableCell>1/1/2023</TableCell>
                            <TableCell>70 lượt xem</TableCell>
                            <TableCell>10 ứng viên</TableCell>
                            <TableCell>
                                <Button variant="text" color="success">Đã đăng</Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="text"
                                    color="success"
                                    onClick={() => {
                                        navigateTo("../searchcandidate/123123")
                                    }}
                                >Tìm ứng viên</Button>
                            </TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </>)
}