import { Autocomplete, Box, Button, Grid, IconButton, InputAdornment, ListItemIcon, ListItemText, MenuItem, MenuList, OutlinedInput, TextField, Typography, Chip } from "@mui/material";
import { useNavigate} from "react-router-dom";
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import PersonIcon from '@mui/icons-material/Person';
import env from 'react-dotenv'
import logoImage from '../assets/camera_icon.png'
import Image from "mui-image";
import { useEffect, useRef, useState } from "react";
import RichText from "./RichText";
import axios from 'axios'
import SchoolIcon from '@mui/icons-material/School';
import FlagIcon from '@mui/icons-material/Flag';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
export default function UpdateProfile({ user }) {
    const imageRef = useRef()
    const navigate = useNavigate()
    const [avatar, setAvatar] = useState(logoImage)
    const [literacy, setLiteracy] = useState(() =>
        EditorState.createEmpty()
    );
    const [target, setTarget] = useState(() =>
        EditorState.createEmpty()
    );
    const [activity, setActivity] = useState(() =>
        EditorState.createEmpty()
    );
    const [certificate, setCertificate] = useState(() =>
        EditorState.createEmpty()
    );
    const [data, setData] = useState({
        fullname: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        avatar: avatar,
        address: '',
        literacy: JSON.stringify(convertToRaw(literacy.getCurrentContent())),
        target: JSON.stringify(convertToRaw(target.getCurrentContent())),
        activity: JSON.stringify(convertToRaw(activity.getCurrentContent())),
        certificate: JSON.stringify(convertToRaw(certificate.getCurrentContent()))

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
        // if (!user.isLogin && user.user.role != "rec") {
        //     navigateTo('/hrlogin')
        // }
    })
    return (<>
        <Grid
            sx={{
                m: 3,
                width: "80%",
                mx: 'auto'
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
                <PersonIcon fontSize="large" />
                <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
                    Cập nhật thông tin cá nhân
                </Typography>
            </Box>
            {/* head info */}
            <Grid
                container
                sx={{ p: 2, rowGap: 2, columnGap: 2, background: "#fff", mb: 2, alignItems: 'center' }}
            >
                <Grid
                    container
                    item
                    xs={12}
                    sx={{ rowGap: 2, columnGap: 4, background: "#fff", alignItems: 'center' }}
                >
                    <Grid
                        item
                        xs={2} sx={{}}>
                        <Image
                            src={avatar}
                            onClick={() => {
                                imageRef.current.click()
                            }}
                            sx={{
                                border: '1px solid gray'
                            }}
                            width="100%"
                            height="100%"
                            duration={0}
                            fit="scale-down"
                        ></Image>
                        <OutlinedInput
                            fullWidth
                            color="success"
                            type="file"
                            size="small"
                            inputRef={imageRef}
                            sx={{
                                mt: 1,
                                display: 'none'
                            }}

                            onChange={(e) => {
                                const fileReader = new FileReader()
                                fileReader.onloadend = () => {
                                    setAvatar(fileReader.result)
                                    // setData({
                                    //     ...data,
                                    //     avatar: fileReader.result
                                    // })
                                }
                                fileReader.readAsDataURL(e.target.files[0])
                            }}
                        />
                    </Grid>
                    <Grid
                        container
                        item xs={9}
                        sx={{
                            rowGap: 2,
                            columnGap: 2
                        }}
                    >
                        <Grid item
                            xs={5}
                        >
                            <Typography variant="p" fontWeight={500}>
                                Họ và tên
                            </Typography>
                            <OutlinedInput
                                fullWidth
                                color="success"
                                size="small"
                                sx={{ mt: 1 }}
                                placeholder="Nguyễn Văn A"
                                onBlur={(e) => {
                                    setData({
                                        ...data,
                                        fullname: e.target.value
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item
                            xs={3}
                        >
                            <Typography variant="p" fontWeight={500} >
                                Ngày sinh
                            </Typography>
                            <OutlinedInput
                                color="success"
                                fullWidth
                                size="small"
                                sx={{ mt: 1 }}
                                type="date"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        dob: e.target.value
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item
                            xs={2}
                        >
                            <Typography variant="p" fontWeight={500}>
                                Giới tính
                            </Typography>
                            <Autocomplete
                                freeSolo
                                size="small"
                                sx={{ mt: 1 }}
                                color="success"
                                options={env.SEXS.split(", ")}
                                onInputChange={(e, value) => {
                                    setData({
                                        ...data,
                                        gender: value
                                    })
                                }}
                                renderInput={(params) => <TextField color="success" {...params} />}
                            />
                        </Grid>
                        <Grid item
                            xs={5}
                        >
                            <Typography variant="p" fontWeight={500}>
                                Email
                            </Typography>
                            <OutlinedInput
                                fullWidth
                                color="success"
                                size="small"
                                sx={{ mt: 1 }}
                                placeholder="congphongkiemsi@gmail.com"
                                onBlur={(e) => {
                                    setData({
                                        ...data,
                                        email: e.target.value
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item
                            xs={5}
                        >
                            <Typography variant="p" fontWeight={500}>
                                Số điện thoại
                            </Typography>
                            <OutlinedInput
                                fullWidth
                                color="success"
                                size="small"
                                sx={{ mt: 1 }}
                                placeholder="0808123789"
                                onBlur={(e) => {
                                    setData({
                                        ...data,
                                        phone: e.target.value
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item
                            xs={12}
                        >
                            <Typography variant="p" fontWeight={500}>
                                Địa chỉ
                            </Typography>
                            <OutlinedInput
                                fullWidth
                                color="success"
                                size="small"
                                sx={{ mt: 1 }}
                                placeholder="Ấp Tân An, Xã Tân An, Huyện Đầm Dơi, Tỉnh Cà Mau"
                                onBlur={(e) => {
                                    setData({
                                        ...data,
                                        address: e.target.value
                                    })
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* body info */}
            <Grid
                container
                sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
            >
                <Grid item xs={12} sx={{mb:2}}>
                    <Chip icon={<SchoolIcon />} label="Học vấn" color="success" />
                    <RichText editorState={literacy} setEditorState={setLiteracy} />
                </Grid>
                <Grid item xs={12} sx={{mb:2}}>
                    <Chip icon={<CrisisAlertIcon />} label="Mục tiêu nghề nghiệp" color="success" />
                    <RichText editorState={target} setEditorState={setTarget} />
                </Grid>
                <Grid item xs={12} sx={{mb:2}}>
                    <Chip icon={<FlagIcon />} label="Hoạt động" color="success" />
                    <RichText editorState={activity} setEditorState={setActivity} />
                </Grid>
                <Grid item xs={12} sx={{mb:2}}>
                    <Chip icon={<WorkspacePremiumIcon />} label="Chứng chỉ" color="success" />
                    <RichText editorState={certificate} setEditorState={setCertificate} />
                </Grid>
                <Button
                    sx={{ mt: 1, minWidth: 200, mr: 'auto' }}
                    size="small"
                    variant="contained"
                    onClick={() => {
                        console.log(data)
                    }}
                >Cập nhật</Button>
            </Grid>
            
        </Grid>
    </>)
}