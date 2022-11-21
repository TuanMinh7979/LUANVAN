import { Autocomplete, Box, Button, Grid, IconButton, InputAdornment, ListItemIcon, ListItemText, MenuItem, MenuList, OutlinedInput, TextField, Typography } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import ApartmentIcon from '@mui/icons-material/Apartment';
import env from 'react-dotenv'
import logoImage from '../assets/camera_icon.png'
import Image from "mui-image";
import { useEffect, useState } from "react";
import RichText from "./RichText";
import axios from 'axios'
import { maxHeight, maxWidth } from "@mui/system";
export default function Company({ user }) {
    const navigate = useNavigate()
    const [logo,setLogo] = useState(logoImage)
    const [jobDescription, setJobDescription] = useState(() =>
        EditorState.createEmpty()
    );
    const [introduce, setIntroduce] = useState(() =>
        EditorState.createEmpty()
    );
    const [benefit, setBenefit] = useState(() =>
        EditorState.createEmpty()
    );
    const [data, setData] = useState({
        companyName: '',
        type: '',
        location: '',
        members: 0,
        foundingAt: '',
        logo: '',
        address: '',
        introduce: JSON.stringify(convertToRaw(introduce.getCurrentContent()))

    })
    const [grossType, setGrossType] = useState(false)
    const [currency, setCurrency] = useState()

    const sendCompanyData = function () {
        axios.post("/company", data)
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
                <ApartmentIcon />
                <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
                    Cập nhật thông tin công ty
                </Typography>
            </Box>
            {/* head info */}
            <Grid
                container
                sx={{ p: 2, rowGap: 2, columnGap: 2, background: "#fff", mb: 2, alignItems: 'center' }}
            >
                <Grid xs={1} sx={{   }}>
                    <Image 
                        src={logo}
                        sx={{
                            borderRadius: '100%',
                            border: '1px solid gray'
                        }}
                        width="100px"
                        height="100px"
                        duration={0}
                        fit="scale-down"
                    ></Image>
                </Grid>
                <Grid item
                    xs={5}
                >
                    <Typography variant="p" fontWeight={500}>
                        Tên công ty
                    </Typography>
                    <OutlinedInput
                        fullWidth
                        size="small"
                        sx={{ mt: 1 }}
                        placeholder="Công ty cổ phần tài chính NQA"
                        onBlur={(e) => {
                            setData({
                                ...data,
                                companyName: e.target.value
                            })
                        }}
                    />
                </Grid>
                <Grid item
                    xs={5}
                >
                    <Typography variant="p" fontWeight={500}>
                        Lĩnh vực hoạt động
                    </Typography>
                    <Autocomplete
                        freeSolo
                        size="small"
                        sx={{ mt: 1 }}
                        options={env.JOBS.split(", ")}
                        onInputChange={(e, value) => {
                            setData({
                                ...data,
                                type: value
                            })
                        }}
                        onBlur={(e) => {
                            setData({
                                ...data,
                                type: e.target.value
                            })
                        }}
                        renderInput={(params) => <TextField {...params} placeholder="Chọn lĩnh vực hoạt động" />}
                    />
                </Grid>
                <Grid item
                    xs={12}
                >
                    <Typography variant="p" fontWeight={500}>
                        Địa điểm làm việc
                    </Typography>
                    <Autocomplete
                        size="small"
                        sx={{ mt: 1 }}
                        options={env.LOCATION.split(", ")}
                        renderInput={(params) => <TextField {...params} placeholder="-- Chọn địa điểm làm việc --" />}
                        onInputChange={(e, value) => {
                            setData({
                                ...data,
                                location: value
                            })
                        }}
                    />
                </Grid>
            </Grid>
            {/* body info */}
            <Box
                sx={{
                    p: 2,
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: "center",
                    background: "#fff"
                }}
            >
                <InfoOutlinedIcon fontSize="small" />
                <Typography variant="p" fontWeight={500} sx={{ ml: 1 }}>
                    Thông tin chung
                </Typography>
            </Box>
            <Grid
                container
                sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
            >
                <Grid container item xs={12} sx={{ columnGap: 2 }}>
                    <Grid item
                        xs={3}
                    >
                        <Typography variant="p" >
                            Quy mô công ty
                        </Typography>
                        <OutlinedInput
                            fullWidth
                            size="small"
                            sx={{ mt: 1 }}
                            type="number"
                            placeholder="Số nhân viên"
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    members: e.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item
                        xs={3}
                    >
                        <Typography variant="p" >
                            Ngày thành lập
                        </Typography>
                        <OutlinedInput
                            fullWidth
                            size="small"
                            sx={{ mt: 1 }}
                            type="date"
                            placeholder="Số lượng cần tuyển"
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    foundingAt: e.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item
                        xs={4}
                    >
                        <Typography variant="p" >
                            Chọn logo
                        </Typography>
                        <OutlinedInput
                            fullWidth
                            type="file"
                            size="small"
                            sx={{ mt: 1 }}
                            onChange={(e) => {
                                // setData({
                                //     ...data,
                                //     amount: e.target.value
                                // })
                                const fileReader = new FileReader()
                                fileReader.onloadend =()=>{
                                    setLogo(fileReader.result)
                                    setData({
                                        ...data,
                                        logo: fileReader.result
                                    })
                                }
                                fileReader.readAsDataURL(e.target.files[0])
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item
                    xs={12}
                >
                    <Typography variant="p" >
                        Khu vực làm việc <Typography variant="span" sx={{ color: "rgba(0,0,0,0.6)" }}>(Địa chỉ cụ thể)</Typography>
                    </Typography>
                    <OutlinedInput
                        fullWidth
                        size="small"
                        sx={{ mt: 1 }}
                        placeholder="Số 7, Ngô Tất Tố, KDC 91B, Phường An khánh, Ninh Kiều, Cần Thơ"
                        onBlur={(e) => {
                            setData({
                                ...data,
                                address: e.target.value
                            })
                        }}
                    />
                </Grid>
            </Grid>
            <Box
                sx={{
                    p: 2,
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: "center",
                    background: "#fff"
                }}
            >
                <InfoOutlinedIcon fontSize="small" />
                <Typography variant="p" fontWeight={500} sx={{ ml: 1 }}>
                    Giới thiệu công ty
                </Typography>
            </Box>
            <Grid
                container
                sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
            >
                <Grid item xs={12}>
                    <RichText editorState={introduce} setEditorState={setIntroduce} />
                </Grid>
                <Button
                    sx={{ mt: 1, minWidth: 200, mr: 'auto' }}
                    size="small"
                    variant="contained"
                    onClick={() => {
                        sendCompanyData()
                    }}
                >Cập nhật</Button>
            </Grid>
        </Grid>
    </>)
}