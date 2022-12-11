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
import env from "../assets/env.json"
import useFetch from "../hooks/useFetch";
export default function Charts({ user }) {
    const navigate = useNavigate()
    const jobsFetch = useFetch(`/rec/${user.user._id}/jobs`);
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
                            <TableCell></TableCell>
                        </TableHead>
                        {!jobsFetch || (jobsFetch && jobsFetch.loading) ? "Loading" : jobsFetch.data.map(item => {
                            return (
                                <TableRow>
                                    <TableCell
                                        onClick={() => {
                                            navigateTo(`/jobdetail/${item._id}`)
                                        }}
                                    >{item.title}</TableCell>
                                    <TableCell>{item.createAt}</TableCell>
                                    <TableCell>{item.endDate}</TableCell>
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
                                                navigateTo(`../searchcandidate/${item._id}`)
                                            }}
                                        >Tìm ứng viên</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="text"
                                            color="success"

                                        >Chỉnh sửa</Button>

                                        <Button
                                            variant="text"
                                            color="success"

                                        >Gỡ bỏ</Button>
                                    </TableCell>
                                </TableRow>
                            )

                        })}

                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </>)
}