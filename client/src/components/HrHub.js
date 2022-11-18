
import { Autocomplete, Box, Button, Grid, IconButton, InputAdornment, ListItemIcon, ListItemText, MenuItem, MenuList, OutlinedInput, TextField, Typography } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EditIcon from '@mui/icons-material/Edit';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ArticleIcon from '@mui/icons-material/Article';
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import { styled, alpha } from '@mui/material/styles'
import 'draft-js/dist/Draft.css';
import env from 'react-dotenv'
import { useState } from "react";
import RichText from "./RichText";

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    '&:hover': {
        background: `${alpha(theme.palette.success.dark, 1)}`,
        color: 'white',
        '& .MuiListItemIcon-root': {
            color: 'white',
        }
    }
}));
function HrSideBar({ name, companyName, avatar }) {
    return (
        <Box
            sx={{
                minHeight: '100%',
                background: "#fff"
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    py: 2,
                    borderBottom: '1px solid rgba(0,0,0,0.1)'
                }}
            >
                <IconButton aria-label="user">
                    <AccountCircleRoundedIcon fontSize="large" />
                </IconButton>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography
                        variant="p"
                        sx={{
                            fontSize: '16px',
                            fontWeight: 550
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant=""
                        sx={{
                            fontSize: '12px'
                        }}
                    >
                        Nhà tuyển dụng
                    </Typography>
                    <Typography
                        variant=""
                        sx={{
                            fontSize: '12px',
                            color: 'rgba(0,0,0,0.6)'
                        }}
                    >
                        {companyName}
                    </Typography>
                </Box>
            </Box>
            <MenuList>
                <CustomMenuItem
                >
                    <ListItemIcon sx={{ py: 2, }}>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Đăng tin tuyển dụng mới</ListItemText>
                </CustomMenuItem>
                <CustomMenuItem>
                    <ListItemIcon sx={{ py: 2 }}>
                        <ApartmentIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cập nhật thông tin công ty</ListItemText>
                </CustomMenuItem>
                <CustomMenuItem>
                    <ListItemIcon sx={{ py: 2 }}>
                        <BarChartIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Báo cáo tuyển dụng</ListItemText>
                </CustomMenuItem>
                <CustomMenuItem>
                    <ListItemIcon sx={{ py: 2 }}>
                        <ArticleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Tin tuyển dụng</ListItemText>
                </CustomMenuItem>
            </MenuList>
        </Box>
    )
}
export default function HrHub() {
    const [jobDescription, setJobDescription] = useState(() =>
        EditorState.createEmpty()
    );
    const [jobRequired, setJobRequired] = useState(() =>
        EditorState.createEmpty()
    );
    const [benefit, setBenefit] = useState(() =>
        EditorState.createEmpty()
    );
    const [data, setData] = useState({
        jobTitle: '',
        job: '',
        location: "",
        amount: 0,
        jobType: '',
        deadline: '',
        gender: '',
        rank: '',
        exp: '',
        currency: '',
        grossType: '',
        gross: 0,
        grossTo: 0,
        grossFrom: 0,
        fullAddress: '',
        jobDescription: convertToRaw(jobDescription.getCurrentContent()),
        jobRequired: convertToRaw(jobRequired.getCurrentContent()),
        jobBenefit: convertToRaw(benefit.getCurrentContent()),
        skillRequired: ''
    })
    const [grossType, setGrossType] = useState(false)
    const [currency, setCurrency] = useState()
    return (
        <>
            <Grid container sx={{ background: '#f1f2f6' }}>
                <Grid item xs={2}>
                    <HrSideBar name="Nguyen Anh" companyName="Chưa cập nhật công ty" />
                </Grid>
                <Grid item xs={10}
                >
                    <Box
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
                            <EditIcon />
                            <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
                                Đăng tin tuyển dụng mới
                            </Typography>
                        </Box>
                        {/* head info */}
                        <Grid
                            container
                            sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
                        >
                            <Grid item
                                xs={5}
                            >
                                <Typography variant="p" fontWeight={500}>
                                    Tên tin tuyển dụng
                                </Typography>
                                <OutlinedInput
                                    fullWidth
                                    size="small"
                                    sx={{ mt: 1 }}
                                    placeholder="Thiết kế đồ họa bán thời gian"
                                    onBlur={(e) => {
                                        setData({
                                            ...data,
                                            jobTitle: e.target.value
                                        })
                                    }}
                                />
                            </Grid>
                            <Grid item
                                xs={6}
                            >
                                <Typography variant="p" fontWeight={500}>
                                    Vị trí tuyển dụng
                                </Typography>
                                <Autocomplete
                                    freeSolo
                                    size="small"
                                    sx={{ mt: 1 }}
                                    options={env.JOBS.split(", ")}
                                    onInputChange={(e, value) => {
                                        setData({
                                            ...data,
                                            job: value
                                        })
                                    }}
                                    onBlur={(e) => {
                                        setData({
                                            ...data,
                                            job: e.target.value
                                        })
                                    }}
                                    renderInput={(params) => <TextField {...params} placeholder="Chọn vị trí công việc cần tuyển" />}
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
                                        Số lượng tuyển
                                    </Typography>
                                    <OutlinedInput
                                        fullWidth
                                        size="small"
                                        sx={{ mt: 1 }}
                                        type="number"
                                        placeholder="Số lượng cần tuyển"
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                amount: e.target.value
                                            })
                                        }}
                                    />
                                </Grid>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Loại công việc
                                    </Typography>
                                    <Autocomplete
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.JOBTYPES.split(", ")}
                                        renderInput={(params) => <TextField {...params} placeholder="-- Chọn loại công việc --" />}
                                        onInputChange={(e, value) => {
                                            setData({
                                                ...data,
                                                jobType: value
                                            })
                                        }}
                                        onBlur={(e) => {
                                            setData({
                                                ...data,
                                                jobType: e.target.value
                                            })
                                        }}
                                    />
                                </Grid>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p" >
                                        Thời hạn tuyển
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
                                                deadline: e.target.value
                                            })
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} sx={{ columnGap: 2 }}>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Giới tính
                                    </Typography>
                                    <Autocomplete
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.SEXS.split(", ")}
                                        renderInput={(params) => <TextField {...params} placeholder="-- Chọn giới tính --" />}
                                        onInputChange={(e, value) => {
                                            setData({
                                                ...data,
                                                gender: value
                                            })
                                        }}
                                    />
                                </Grid>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Cấp bậc
                                    </Typography>
                                    <Autocomplete
                                        freeSolo
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.LEVEL.split(", ")}
                                        renderInput={(params) => <TextField {...params} placeholder="Giám đốc kinh doanh" />}
                                        onInputChange={(e, value) => {
                                            setData({
                                                ...data,
                                                rank: value
                                            })
                                        }}
                                        onBlur={(e) => {
                                            setData({
                                                ...data,
                                                rank: e.target.value
                                            })
                                        }}
                                    />
                                </Grid>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Kinh nghiệm làm việc
                                    </Typography>
                                    <Autocomplete
                                        freeSolo
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.EXP.split(", ")}
                                        renderInput={(params) => <TextField {...params} placeholder="Chưa có kinh nghiệm" />}
                                        onInputChange={(e, value) => {
                                            setData({
                                                ...data,
                                                exp: value
                                            })
                                        }}
                                        onBlur={(e) => {
                                            setData({
                                                ...data,
                                                exp: e.target.value
                                            })
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} sx={{ columnGap: 2 }}>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Loại tiền lương
                                    </Typography>
                                    <Autocomplete
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.CURRENCY.split(", ")}
                                        onInputChange={(e, value) => {
                                            setCurrency(value)
                                            setData({
                                                ...data,
                                                currency: value
                                            })
                                        }}
                                        renderInput={(params) => <TextField {...params} placeholder="-- Chọn loại tiền lương --" />}
                                    />
                                </Grid>
                                <Grid item
                                    xs={3}
                                >
                                    <Typography variant="p">
                                        Kiểu lương
                                    </Typography>
                                    <Autocomplete
                                        size="small"
                                        sx={{ mt: 1 }}
                                        options={env.GROSSTYPES.split(", ")}
                                        onInputChange={(e, value) => {
                                            setGrossType(value)
                                            setData({
                                                ...data,
                                                grossType: value
                                            })
                                        }}
                                        renderInput={(params) => <TextField {...params} placeholder="-- Chọn kiểu lương"

                                        />}
                                    />
                                </Grid>
                                {/* Lương theo khoảng */}
                                {grossType == "Trong khoảng" && <>
                                    <Grid item
                                        xs={2}
                                    >
                                        <Typography variant="p">
                                            Từ
                                        </Typography>
                                        <OutlinedInput
                                            fullWidth
                                            size="small"
                                            sx={{ mt: 1 }}
                                            type="number"
                                            endAdornment={<InputAdornment position="end">{currency}</InputAdornment>}
                                            onBlur={(e) => {
                                                setData({
                                                    ...data,
                                                    grossFrom: e.target.value
                                                })
                                            }}
                                        />
                                    </Grid>
                                    <Grid item
                                        xs={2}
                                    >
                                        <Typography variant="p">
                                            Đến
                                        </Typography>
                                        <OutlinedInput
                                            fullWidth
                                            size="small"
                                            sx={{ mt: 1 }}
                                            type="number"
                                            endAdornment={<InputAdornment position="end">{currency}</InputAdornment>}
                                            onBlur={(e) => {
                                                setData({
                                                    ...data,
                                                    grossTo: e.target.value,
                                                    gross: ''
                                                })
                                            }}
                                        />
                                    </Grid>
                                </>}
                                {/* Lương cố định */}
                                {grossType == "Cố định" && <>
                                    <Grid item
                                        xs={3}
                                    >
                                        <Typography variant="p">
                                            Lương
                                        </Typography>
                                        <OutlinedInput
                                            fullWidth
                                            size="small"
                                            sx={{ mt: 1 }}
                                            type="number"
                                            endAdornment={<InputAdornment position="end">{currency}</InputAdornment>}
                                            onBlur={(e) => {
                                                setData({
                                                    ...data,
                                                    gross: e.target.value,
                                                    grossFrom: '',
                                                    grossTo: ''
                                                })
                                            }}
                                        />
                                    </Grid>
                                </>}
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
                                            fullAddress: e.target.value
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
                                Thông tin chi tiết
                            </Typography>
                        </Box>
                        <Grid
                            container
                            sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
                        >
                            <Grid item xs={12}>
                                <Typography variant="p">
                                    Mô tả công việc
                                </Typography>
                                <RichText editorState={jobDescription} setEditorState={setJobDescription} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="p">
                                    Yêu cầu ứng viên
                                </Typography>
                                <RichText editorState={jobRequired} setEditorState={setJobRequired} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="p">
                                    Quyền lợi
                                </Typography>
                                <RichText editorState={benefit} setEditorState={setBenefit} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="p">
                                    Kỹ năng cần có
                                </Typography>
                                <OutlinedInput size="small" fullWidth sx={{ mt: 1 }} placeholder="VD: Kỹ năng photoshop, Word, Excel, ..." />
                            </Grid>
                            <Button
                                sx={{ mt: 1, minWidth: 200, mr: 'auto' }}
                                size="small"
                                variant="contained"
                                onClick={() => {
                                    console.log(data)
                                }}
                            >Đăng tin</Button>
                        </Grid>
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}